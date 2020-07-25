const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    // Do you need a specific ID key?}
    QR: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    expirationDate: { type: Date, default: Date.now },
    location: String,
    paid: { type: Boolean, default: false }
});

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;