const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tagSchema = new Schema({
    type: { type: String, required: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    startDate: { type: Date, default: Date.now },
    expirationDate: { type: Date, },
    location: { type: String, required: true },
    paid: { type: Boolean, default: true },
    checkedin: { type: Boolean, default: false },
});


tagSchema.pre('save', async function (next) {

    Date.prototype.addDays = function (days) {
        let date = new Date(this.valueOf());
        if (!days) {
            return new Date(`${date.getFullYear() + 1}-1-1`)
        }
        date.setDate(date.getDate() + days);
        return Date.parse(date);
    }

    switch (this.type) {
        // Set default to seasonal
        case 'Weekly':
            this.expirationDate = await this.startDate.addDays(7)
            break;
        case 'Day':
            this.expirationDate = await this.startDate.addDays(1)
            break;
        default:
            this.expirationDate = await this.startDate.addDays()
            break;
    }
    next()
})

const Tag = mongoose.model("Tag", tagSchema);

module.exports = Tag;