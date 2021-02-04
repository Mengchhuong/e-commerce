const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.get('/',authController.dashboard);
router.get('/signin',authController.signIn);
router.get('/signup',authController.signUp);
router.post('/register', authController.register);
router.post('/login', authController.login);


// router.get('/signin',(req,res)=>{
//     res.render('signin');
    
// });
// router.get('/signup',(req,res)=>{
//     res.render('signup');
    
// });


module.exports = router;