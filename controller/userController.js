const User = require('../model/user');

module.exports.profile = (req, res)=>{
    return res.end("<h1> Here's you are in the profile Section</h1>");
}

// render the singIn page
module.exports.signIN = function (req, res){
    return res.render('userSignIn', {
        title : "Codeial | Sign-IN"
    })
};

// render the singUp page
module.exports.signUp = function (req, res){
    return res.render('userSignUp', {
        title : "Codeial | Sign-UP"
    })
};

// Get the data from singUp page

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
        return res.redirect("/user/sign-in");
      }
      return res.redirect("back");


}

// Get the data formm singIN page
module.exports.createSession = function (req, res){
    //TODO later
}