module.exports.home = function(req, res){
    console.log(req.cookies);
    res.cookie('user_id' , 25);
    return res.render('home', {
        title : "Home of CodeIal"
    })
}

module.exports.userHome = function(req, res){
    return res.render('user' , {
        title: "User page"
    })
}

module.exports.calling = (req, res)=>{
    return res.end('<p> Fuck off just for fun</p>')
}