const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const register = async (req,res) => {
    const {username, password, role} = req.body;

    try {
      const existingUser = await User.findOne({ username });
  
      if (existingUser) return res.status(400).json({ message: 'User already exists' });
  
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword, role });
  
      await user.save();
  
      res.status(200).json({ message: 'User Registered Successfully' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }

};

const login = async (req, res) => {
    const {username, password} = req.body;


    try{

      const user = await User.findOne({ username });
      if (!user) return res.status(400).json({ message: 'User not found' });
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ message: 'Invalid password' });
  
      const token_secret = process.env.JWT_SECRET;
      const token = jwt.sign({ id: user._id, role: user.role }, token_secret, { expiresIn: '1h' });
      
      res.json({ token, role: user.role, message: 'Login successful' });


    //It will last for 1 hour
    //we can also use cookie for more security 
    // res.cookie('token', token, {
    //     httpOnly: true,
    //     secure: process.env.NODE_ENV === 'production', 
    //     sameSite: 'strict',
    //     maxAge: 3600000, 
    //   });
  

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
      }
}

module.exports = {register, login};