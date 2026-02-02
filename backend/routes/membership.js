const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');
const requireAuth = require('../middleware/requireAuth');

// Submit membership application (public)
router.post('/', async (req, res) => {
    try {
        const membershipData = new Membership(req.body);
        await membershipData.save();
        
        res.status(201).json({
            success: true,
            message: 'Membership application submitted successfully',
            data: membershipData
        });
    } catch (error) {
        console.error('Membership submission error:', error);
        res.status(400).json({
            success: false,
            message: error.message || 'Failed to submit membership application'
        });
    }
});

// Get all membership applications with pagination (admin)
router.get('/', requireAuth, async (req, res) => {
    try {
        const page = Math.max(1, parseInt(req.query.page) || 1);
        const limit = Math.min(50, Math.max(1, parseInt(req.query.limit) || 10));
        const skip = (page - 1) * limit;
        const total = await Membership.countDocuments();
        const applications = await Membership.find().sort({ submittedAt: -1 }).skip(skip).limit(limit).lean();
        res.json({
            success: true,
            data: applications,
            total,
            page,
            limit,
            totalPages: Math.ceil(total / limit)
        });
    } catch (error) {
        console.error('Error fetching memberships:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to fetch membership applications'
        });
    }
});

// Get single membership application (admin - for View)
router.get('/:id', requireAuth, async (req, res) => {
    try {
        const application = await Membership.findById(req.params.id).lean();
        if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
        res.json({ success: true, data: application });
    } catch (error) {
        console.error('Error fetching membership:', error);
        res.status(500).json({ success: false, message: 'Failed to fetch application' });
    }
});

// Update membership status - approve/reject (admin)
router.patch('/:id/status', requireAuth, async (req, res) => {
    try {
        const { status } = req.body;
        if (!['approved', 'rejected'].includes(status)) {
            return res.status(400).json({ success: false, message: 'Status must be approved or rejected' });
        }
        const application = await Membership.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!application) return res.status(404).json({ success: false, message: 'Application not found' });
        res.json({ success: true, data: application });
    } catch (error) {
        console.error('Error updating membership status:', error);
        res.status(500).json({ success: false, message: 'Failed to update status' });
    }
});

// Delete membership application (admin)
router.delete('/:id', requireAuth, async (req, res) => {
    try {
        const deleted = await Membership.findByIdAndDelete(req.params.id);
        if (!deleted) return res.status(404).json({ success: false, message: 'Application not found' });
        res.json({ success: true, message: 'Membership application deleted' });
    } catch (error) {
        console.error('Error deleting membership:', error);
        res.status(500).json({ success: false, message: 'Failed to delete application' });
    }
});

module.exports = router;

