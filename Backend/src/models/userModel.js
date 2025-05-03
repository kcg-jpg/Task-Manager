const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  first_name: String,
  last_name: String,
  email: { type: String, required: true, unique: true },
  username: { type: String, unique: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

// Pre-save hook to hash password and lowercase email
userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('email')) {
      this.email = this.email.toLowerCase();
    }
    if (this.isModified('password')) {
      const hashed = await bcrypt.hash(this.password, 10);
      this.password = hashed;
    }
    next();
  } catch (err) {
    next(err);
  }
});

// Password comparison method
userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
