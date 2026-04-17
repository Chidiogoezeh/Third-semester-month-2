import User from '../models/User.js';

export const registerUser = async (req, res) => {
    try {
        const { username, email, dob } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: 'Email already registered' });
        }

        const newUser = await User.create({ username, email, dob });
        res.status(201).json({ message: 'Reminder set successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};