const express = require('express');
const router = express.Router();
const Newsletter = require('../models/Newsletter');
const { sendNewsletterConfirmationEmail } = require('../utils/emailService');

// Subscribe to newsletter
router.post('/subscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        // Normalize email
        const normalizedEmail = email.trim().toLowerCase();

        // Check if email already exists
        const existingSubscription = await Newsletter.findOne({ email: normalizedEmail });

        if (existingSubscription) {
            if (existingSubscription.active) {
                return res.status(400).json({
                    success: false,
                    message: 'This email is already subscribed to our newsletter.'
                });
            } else {
                // Reactivate subscription
                existingSubscription.active = true;
                existingSubscription.unsubscribedAt = null;
                await existingSubscription.save();
                
                // Send confirmation email
                try {
                    await sendNewsletterConfirmationEmail(normalizedEmail);
                } catch (emailError) {
                    console.error('Error sending confirmation email:', emailError);
                    // Don't fail the subscription if email fails
                }

                return res.status(200).json({
                    success: true,
                    message: 'Welcome back! Your subscription has been reactivated.',
                    data: existingSubscription
                });
            }
        }

        // Create new subscription
        const newsletter = new Newsletter({
            email: normalizedEmail
        });

        await newsletter.save();

        // Send confirmation email
        try {
            await sendNewsletterConfirmationEmail(normalizedEmail);
        } catch (emailError) {
            console.error('Error sending confirmation email:', emailError);
            // Don't fail the subscription if email fails
        }

        res.status(201).json({
            success: true,
            message: 'Thank you for subscribing! Please check your email for confirmation.',
            data: newsletter
        });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        
        // Handle duplicate key error (MongoDB unique constraint)
        if (error.code === 11000 || error.message.includes('duplicate')) {
            return res.status(400).json({
                success: false,
                message: 'This email is already subscribed to our newsletter.'
            });
        }
        
        res.status(400).json({
            success: false,
            message: error.message || 'Failed to subscribe to newsletter'
        });
    }
});

// Unsubscribe from newsletter
router.post('/unsubscribe', async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        const normalizedEmail = email.trim().toLowerCase();
        const subscription = await Newsletter.findOne({ email: normalizedEmail });

        if (!subscription) {
            return res.status(404).json({
                success: false,
                message: 'Email not found in our newsletter list.'
            });
        }

        if (!subscription.active) {
            return res.status(400).json({
                success: false,
                message: 'This email is already unsubscribed.'
            });
        }

        subscription.active = false;
        subscription.unsubscribedAt = new Date();
        await subscription.save();

        res.status(200).json({
            success: true,
            message: 'You have been successfully unsubscribed from our newsletter.'
        });
    } catch (error) {
        console.error('Newsletter unsubscribe error:', error);
        res.status(400).json({
            success: false,
            message: error.message || 'Failed to unsubscribe from newsletter'
        });
    }
});

// Get all newsletter subscriptions (admin only - requires auth middleware)
router.get('/all', async (req, res) => {
    try {
        // Check if user is authenticated (you can add proper auth middleware here)
        if (!req.session || !req.session.userId) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized. Admin access required.'
            });
        }

        const subscriptions = await Newsletter.find()
            .sort({ subscribedAt: -1 });

        res.status(200).json({
            success: true,
            count: subscriptions.length,
            data: subscriptions
        });
    } catch (error) {
        console.error('Error fetching newsletter subscriptions:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch newsletter subscriptions'
        });
    }
});

module.exports = router;
