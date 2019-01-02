const Movie = require('../models/movie')
const User = require('../models/user')

exports.addMovieToList = function(req, res, next) {
  User.findOne({_id: req.user._id}, function (err, user) {
    user.watchList.push(req.body)

    user.save(function (err, user) {
      console.log('line 9 user');
      console.log(user);

      res.send(user.watchList)
    })
  })
}
