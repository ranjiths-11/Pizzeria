const express = require('express');
const router = express.Router();
var jwt = require('jsonwebtoken');
const authController = require('../controllers/AuthController');
const userController = require('../controllers/UserController');
const updateProfile = require('../controllers/UpdateUser');

const authenticate = (req,res,next)=>{
    const token = req.headers['authorization'];
    if(!token) return res.status(401).json({error: 'Access denied' });
    try{
        const verified = jwt.verify(token, 'your_jwt_secret');
        req.user = verified;
        console.log(req.user.id);
        next();
    }
    catch{
        res.status(400).json({error: 'Invalid token' });
    }
};

router.get('/user', authenticate, userController.test_list);
router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/profile/update', updateProfile.test_list);

module.exports = router;