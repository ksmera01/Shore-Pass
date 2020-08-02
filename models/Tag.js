const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    expirationDate: { type: Date },
    location: { type: String, required: true },
    paid: { type: Boolean, default: true },
    checkedin: { type: Boolean, default: false },
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;