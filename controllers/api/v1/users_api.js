const User = require('../../../models/user');
const jwt = require('jsonwebtoken');

module.exports.createSession = async function(req, res){
    try{
        let user = await User.findOne({email : req.body.email});
        //console.log(user._id);
        if(!user || user.password != req.body.password){
            //console.log(user.password + " " + req.body.password);
            return res.json(404, {
                message : 'Incorrect user or password'
            }) 
        }

        return res.json(200, {
            message : 'Sign in Sussfull, keep your token safe with you',
            data : {
                token : jwt.sign(user.toJSON(), 'codeial' )
            }
        })
    }catch(err) {
        console.log("****************" + err);
        return res.json(500, {
            message : 'Enteral server Error'
        })
    }   
}