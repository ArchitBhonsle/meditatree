const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, unique: true, lowercase: true },
  password: String,
  division: { type: Number, default: 1 },
  group_id: { type: mongoose.Types.ObjectId, ref: 'Group' },
  xp: {
    daily: [Number],
    weekly: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
  },
  streak: {
    last_session: {
      type: Date,
      default: new Date(631132200),
    },
    current_streak: {
      type: Number,
      default: 0,
    },
  },
});

const Admin = mongoose.model('User', userSchema);

module.exports = Admin;
