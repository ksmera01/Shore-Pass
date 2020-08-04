const db = require("../models");
const passport = require("../config/passport");

// Defining methods for the booksController
module.exports = {
  // findAll for Admin page?
  findAll: function (req, res) {
    db.User
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    console.log(req.params.id)
    db.User
      .findById(req.params.id)
      .populate('tags')
      .then(({ email, firstName, lastName, tags, _id }) => res.json({
        email, firstName, lastName, tags, _id
      }))
      .catch(err => res.status(422).json(err));
  },
  // email: user.email,
  // firstName: user.firstName,
  // lastName: user.lastName,
  // tags: user.tags,
  // _id: user._id
  // For Signing up a new User
  create: function (req, res) {
    db.User
      .create(req.body)
      // .then(dbModel => res.json(dbModel))
      .then(user => req.login(user, (err) => {
        if (err) {
          console.log(err)
        }
        return res.json({ email: user.email, firstName: user.firstName, lastName: user.lastName, tags: user.tags, _id: user._id })
      }))
      .catch(err => res.status(422).json(err));
  },


  // update: function (req, res) {
  //   db.User
  //     .findOneAndUpdate({ _id: req.params.id }, {$push: {}} req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function (req, res) {
  //   db.User
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // }
};
