const db = require("../models");

module.exports = {
    // findAll for Admin page?
    findAll: function (req, res) {
        db.Tag
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Tag
            .findById(req.params.id)
            .then(dbModel => {
                res.status(200).json(dbModel)
            })
            // res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // THIS ONE DID NOT POST AND PUSH TO ARRAY.. WHY???
    // create: function (req, res) {
    //     db.Tag.create(req.body)
    //         .then(({ _id }) => {
    //             console.log('Got the tag id' + _id)
    //             db.User.findByIdAndUpdate(req.params.id, { $push: { tags: _id } }, { new: true })
    //         })
    //         .then(UserObj => {
    //             res.json(UserObj);
    //         })
    //         .catch(err => {
    //             res.json(err);
    //         });
    // },
    create: function (req, res) {
        db.Tag.create(req.body)
            .then(({ _id }) => db.User.findByIdAndUpdate(req.params.id, { $push: { tags: _id } }, { new: true }))
            .then(dbUser => {
                res.json(dbUser);
            })
            .catch(err => {
                res.json(err);
            });
    },
    createGuest: function (req, res) {
        db.Tag.create(req.body)
            .then(tag => {
                res.json(tag);
            })
            .catch(err => {
                res.json(err);
            });
    }
    // update: function (req, res) {
    //   db.User
    //     .findOneAndUpdate({ _id: req.params.id }, req.body)
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
