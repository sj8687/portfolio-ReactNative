const express = require('express');

const router = express.Router();

// In a real backend this would write to a database or send an email
// (e.g. via Nodemailer/SendGrid). Here we just log and echo it back.
const submissions = [];

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and message are all required.',
    });
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return res.status(400).json({ success: false, message: 'Invalid email address.' });
  }

  const entry = { name, email, message, receivedAt: new Date().toISOString() };
  submissions.push(entry);
  console.log('New contact submission:', entry);

  return res.json({
    success: true,
    message: `Thanks ${name}, your message has been received!`,
  });
});

// Handy for demo purposes — lets you see everything submitted so far.
router.get('/', (_req, res) => {
  res.json(submissions);
});

module.exports = router;
