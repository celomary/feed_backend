// recommandiation model
const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  googleId: String,
  skills: [String],
  location: String,
  imageProfile: String,
  acceptNewClient: {
    isAccepting: Boolean,
    endDate: Date,
  },
});

module.exports = model("User", UserSchema);
