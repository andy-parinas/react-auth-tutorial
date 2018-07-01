const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');

//Define the Model
const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String
})

//On Save Hook, Encrypt Password
userSchema.pre('save', function(next){
    const user = this;

    bcrypt.genSalt(10, function(err, salt){
        if(err){ return next(err)}

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if(err){ return next(err)}

            user.password = hash;
            next();
        })

    })
});

userSchema.methods.comparePassword = function(candidatePassword, callback){
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
        if(err){ return callback(err)}

        callback(null, isMatch);
    })
}

//Create a model class
const ModelClass = mongoose.model('user', userSchema);


//export the model
module.exports = ModelClass;