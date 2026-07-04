const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Simple request logger — helpful while wiring things up from the app
app.use((req, _res, next) => {
  console.log(`${req.method} ${req.originalUrl}`);
  next();
});

app.get('/', (_req, res) => {
  res.json({ message: 'Portfolio demo backend is running.' });
});

app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);

// 404 fallback
app.use((req, res) => {
  res.status(404).json({ message: `No route for ${req.method} ${req.originalUrl}` });
});

app.listen(PORT, () => {
  console.log(`✅ Backend demo running at http://localhost:${PORT}`);
  console.log(`   Login:   POST http://localhost:${PORT}/api/auth/login`);
  console.log(`   Contact: POST http://localhost:${PORT}/api/contact`);
});
