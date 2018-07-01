const jwt = require('jwt-simple');
const User = require('../models/user');


function tokenForUser(user){
    const timestamp = new Date().getTime();
    return jwt.encode({sub: user.id, iat: timestamp}, 'secret');
}


exports.signup = function(req, res, next){
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        res.status(422).send({error: 'Email and Password required'});
    }

    User.findOne({email: email}, function(err, existingUser){
        if(err){ return next(err)}

        if(existingUser){
            return res.status(422).send({error: 'Email is in use'});
        }
    });

    const user = new User({
        email: email,
        password: password
    })

    user.save(function(err){
        if(err){ return next(err)}

        const timestamp = new Date().getTime();
        res.json({token:jwt.encode({sub: user.id, iat: timestamp}, 'secret')});
    });

}

exports.signin = function(req, res, next){
    res.send({token: tokenForUser(req.user)});
}