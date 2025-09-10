const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true, trim:true },
  description: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  capacity: { type: Number, required: true, min: 1 },
  status: { type: String, enum: ['draft', 'published', 'cancelled'], default: 'draft' }},
  { timestamps: true }
);

module.exports = mongoose.model('Event', EventSchema);