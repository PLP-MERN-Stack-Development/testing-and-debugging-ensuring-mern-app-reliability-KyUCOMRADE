const User = require('../models/userModel');

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find({});
    return res.status(200).json(users);
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { name, email } = req.body;
    // Simple validation
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required' });
    }

    // Avoid duplicate emails (basic)
    const existing = await User.findOne({ email });
    if (existing) {
      return res.status(409).json({ message: 'Email already exists' });
    }

    const user = new User({ name, email });
    await user.save();
    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
};

module.exports = { getUsers, createUser };
