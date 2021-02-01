const User = require('../models/users');

exports.signIn= (req,res) =>{
    res.render('signin');
}
exports.signUp= (req,res) =>{
    res.render('signup');
}
exports.dashboard= (req,res) =>{
    res.render('dashboard');
}



exports.register = (req,res) =>{
   const username= req.body.username;
   const password= req.body.password;
   const confirm_password = req.body.confirm_password;
   const date = new Date();

   const user = new User({
       username,
       password,
       registerAt: date.toISOString()
   })
   user.save().then(result=>{
       console.log("save")
        res.redirect('/signin');
    }).catch(err =>{
        console.log(err)
        res.render('signup',{message: "Signup fail, try again"});
    });
}