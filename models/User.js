const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now, required: true },
    tags: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tag"
        }
    ]
});

// Define schema methods
userSchema.methods = {
    checkPassword: function (inputPassword) {
        return bcrypt.compareSync(inputPassword, this.password)
    },
    hashPassword: plainTextPassword => {
        return bcrypt.hashSync(plainTextPassword, 10)
    }
}

// converted to async function
userSchema.pre('save', async function (next) {
    if (!this.password) {
        next()
    } else {
        this.password = await this.hashPassword(this.password)
        console.log(`New user, ${this.email} signed up successfully!`)
        next()
    }
})

const User = mongoose.model("User", userSchema);

module.exports = User;
