const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/users', userRoutes);

// Global error handler
app.use((err, req, res, next) => {
  console.error('🔥 Error caught:', err.stack);
  res.status(500).json({ message: 'Something broke!' });
});

module.exports = app;
