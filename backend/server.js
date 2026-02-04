const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET || 'leo-club-admin-secret',
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }
}));
// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/leo-club', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// API routes first (so /api/* is never served as static files)
app.use('/api/admin', require('./routes/auth'));
app.use('/api/membership', require('./routes/membership'));
app.use('/api/contact', require('./routes/contact'));
app.use('/api/newsletter', require('./routes/newsletter'));

app.use(express.static(path.join(__dirname, '../frontend')));

// Serve HTML pages
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'about.html'));
});

app.get('/board', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'board.html'));
});

app.get('/gallery', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'gallery.html'));
});

app.get('/events', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'events.html'));
});

app.get('/awards', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'awards.html'));
});

app.get('/achievements', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'achievements.html'));
});

app.get('/membership', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'membership.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'contact.html'));
});

app.get('/admin/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'admin-login.html'));
});
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'admin.html'));
});
app.get('/admin/members', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'admin-members.html'));
});
app.get('/admin/contacts', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend', 'admin-contacts.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

