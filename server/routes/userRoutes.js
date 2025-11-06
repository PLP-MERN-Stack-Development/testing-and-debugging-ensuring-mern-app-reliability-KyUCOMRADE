const express = require('express');
const User = require('../models/userModel'); // your User model
const router = express.Router(); // ✅ define router

// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new user
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) return res.status(400).json({ message: 'Name and email are required' });

  const existing = await User.findOne({ email });
  if (existing) return res.status(409).json({ message: 'Email already exists' });

  try {
    const user = await User.create({ name, email });

    // Emit new-user event via Socket.io
    const io = req.app.get('io');
    if (io) io.emit('new-user', user);

    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
