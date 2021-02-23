import mongoose from 'mongoose';

const tickerSchema = mongoose.Schema({
  name: String,
  desc: String,
  creator: String,
  tags: [String],
  bullishCount: {
    type: Number,
    default: 0
  },
  bearishCount: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const NewTicker = mongoose.model('NewTicker', tickerSchema);
export default NewTicker;