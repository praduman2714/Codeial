const User = require('../models/user');


module.exports.profile = async function(req, res){
    let user = await User.findById(req.params.id);
    //console.log(user + " from user_controller");
    return res.render('user_profile', {
        title: 'User Profile',
        profileUser : user
    })
}

module.exports.update = async function(req, res){
    if(req.user.id == req.params.id){
        
        let user = await User.findByIdAndUpdate(req.params.id, req.body);
        //console.log(user);
        return res.redirect('back');
    }else{
        return res.status(401).send('Unathaurized');
    }
}


// render the sign up page
module.exports.signUp = function(req, res){
    if(req.isAuthenticated()){
        return  res.redirect('/users/profile');
    }
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}


// render the sign in page
module.exports.signIn = function(req, res){
    if(req.isAuthenticated()){
        return res.redirect('/users/profile');
   }

    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

// get the sign up data
module.exports.create = async function(req, res){
    //TODO
    if (req.body.password != req.body.confirm_password) {
        return res.redirect("back");
      }
      let user = await User.findOne({ email: req.body.email });
      //console.log(user);
      if (!user) {
        //console.log(user);
        await User.create(req.body);
        //console.log(a);
        return res.redirect("/users/sign-in");
      }
      return res.redirect("back");


}


// sign in and create a session for the user
module.exports.createSession = function(req, res){
    return res.redirect('/');
}

module.exports.destroySession = function(req, res){
    req.logout();
    return res.redirect('/');
}