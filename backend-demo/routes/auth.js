const express = require('express');
const jwt = require('jsonwebtoken');
const users = require('../data/users.json');

const router = express.Router();
const JWT_SECRET = 'demo-secret-change-me'; // placeholder only — replace when wiring a real backend

router.post('/login', (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Username and password are required.' });
  }

  const user = users.find((u) => u.username === username && u.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password.' });
  }

  const token = jwt.sign({ username: user.username }, JWT_SECRET, { expiresIn: '2h' });

  return res.json({
    token,
    user: { username: user.username },
  });
});

module.exports = router;
