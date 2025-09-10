require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

// Connect to DB
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('DB connection error:', err.message);
    process.exit(1);
  });

// Routes
const eventRoutes = require('./routes/events');
app.use('/api/events', eventRoutes);

//  Centralized error handler 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message || 'Server error'
  });
});

// Start server
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));
