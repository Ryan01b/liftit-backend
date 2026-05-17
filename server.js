const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(express.json());

// Import Routes
const workoutRoutes = require('./routes/workoutRoutes');
const exerciseRoutes = require('./routes/exerciseRoutes');

// Use Routes
app.use('/api/workouts', workoutRoutes);
app.use('/api/exercises', exerciseRoutes);

// Test route
app.get('/', (req, res) => {
  res.send('LiftIt Backend is running! ');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server is running on http://localhost:${PORT}`);
});
