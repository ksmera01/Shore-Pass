const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    // Do you need a specific ID key?}
    QR: {},
    type: { type: String, required: true },
    price: {
        type: Number, required: true
    },
    startDate: { type: Date, default: Date.now },
    expirationDate: { type: Date, default: Date.now },
    location: String,
    paid: { type: true, default: false },


});

const Book = mongoose.model("Tag", tagSchema);

module.exports = Tag;