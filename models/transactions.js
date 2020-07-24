const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    orderNumber: { type: String, unique: true, required: true },
    total: { type: Number, required: true },
    // date: { type: Date, default: Date.now }
    userID: {
        type: Schema.Types.ObjectID,
        ref: "Tag"
    }
});

const Book = mongoose.model("Transaction", transactionSchema);

module.exports = Transaction;