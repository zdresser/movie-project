const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');
const Movie = require('../models/movie');
const uniqueArrayPlugin = require('mongoose-unique-array');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  watchList: [{ type: Movie.MovieSchema }]
});


// userSchema.pre('validate', function (next) {
//   console.log('what is this?')
//   console.log(this);
//
//   return next()
//
//   // return next(new Error('Duplicated sub document!'));
// });

userSchema.methods.setPassword = function (password) {
  const user = this;

  // generate a salt then run callback
  bcrypt.genSalt(10, function(err, salt) {
    if (err) { return next(err); }

    // hash (encrypt) our password using the salt
    bcrypt.hash(user.password, salt, null, function(err, hash) {
      if (err) { return next(err); }

      // overwrite plain text password with encrypted password
      user.password = hash;
    });
  });
}

// On Save Hook, encrypt password
// Before saving a model, run this function
// TODO: We cannot do this, because it changes the password when we want to save other things
// userSchema.pre('save', function(next) {
//   // get access to the user model
//   const user = this;
//
//   // generate a salt then run callback
//   bcrypt.genSalt(10, function(err, salt) {
//     if (err) { return next(err); }
//
//     // hash (encrypt) our password using the salt
//     bcrypt.hash(user.password, salt, null, function(err, hash) {
//       if (err) { return next(err); }
//
//       // overwrite plain text password with encrypted password
//       user.password = hash;
//       next();
//     });
//   });
// });

userSchema.methods.comparePassword = function(candidatePassword, callback) {
  console.log('line 64 of user.js');
  console.log(candidatePassword);

  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    console.log('line 68');
    console.log(isMatch);

    if (err) { return callback(err); }

    callback(null, isMatch);
  });
}

// Create the model class
const ModelClass = mongoose.model('user', userSchema);

// Export the model
module.exports = ModelClass;
