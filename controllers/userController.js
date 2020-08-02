const db = require("../models");

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
      // .find({ _id: req.params.id })
      .populate('tags')
      .then(user => res.json(user))
      .catch(err => res.status(422).json(err));
  },
  // For Signing up a new User
  create: function (req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
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
