const User = require('../models/UserModel.js');

exports.createUser = async (req, res) => {
  try {
    const {name,
        email,
        password,
        age}=req.body
    const user = await User.create({name,email,password,age});
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const { page = 1, limit = 10, } = req.query;
    const users = await User.find().select({ name: 1, email: 1, age: 1 }).sort({ age: 1 }).skip((page - 1) * limit) .limit(limit);
    res.json(users);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
