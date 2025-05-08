const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Currency Converter Backend is running ✅');
});

app.get('/api/convert', (req, res) => {
  const inr = parseFloat(req.query.amount);
  if (isNaN(inr)) {
    return res.status(400).json({ error: 'Invalid INR amount' });
  }

  const usdRate = 0.012; // mock rate
  const eurRate = 0.011; // mock rate

  const usd = (inr * usdRate).toFixed(2);
  const eur = (inr * eurRate).toFixed(2);

  res.json({ usd, eur });
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});
