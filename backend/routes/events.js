const express = require('express');
const router = express.Router();
const Event = require('../models/Event');
const schema = require('../validation/eventValidation');

// Create event
router.post('/', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const evt = new Event(req.body);
    await evt.save();
    res.status(201).json(evt);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all events (with search & date filter)
router.get('/', async (req, res) => {
  try {
    const { q, date } = req.query;
    let filter = {};

    if (q) {
      filter.$or = [
        { title: { $regex: q, $options: 'i' } },
        { venue: { $regex: q, $options: 'i' } }
      ];
    }

    if (date) {
      filter.date = date;
    }

    const events = await Event.find(filter).sort({ date: 1 });
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get single event
router.get('/:id', async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: 'Event not found' });
    res.json(event);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update event
router.put('/:id', async (req, res) => {
  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });

  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedEvent) return res.status(404).json({ error: 'Event not found' });
    res.json(updatedEvent);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete event
router.delete('/:id', async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: 'Event not found' });
    res.json({ message: 'Event deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
