const bcrypt = require('bcryptjs');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Tags = require('./Tag')

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // tags: [Tags],
  createdAt: { type: Date, default: Date.now, required: true },
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

// Define hooks for pre-saving
userSchema.pre('save', function (next) {
  if (!this.password) {
    next()
  } else {
    console.log('PASSWORD HASHED SUCCESSFULLY')
    this.password = this.hashPassword(this.password)
    next()
  }
})


const User = mongoose.model("User", userSchema);

module.exports = User;
