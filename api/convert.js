export default function handler(req, res) {
    const { amount } = req.query;
  
    const inr = parseFloat(amount);
    if (isNaN(inr)) {
      return res.status(400).json({ error: 'Invalid INR amount' });
    }
  
    const usdRate = 0.012; 
    const eurRate = 0.011; 
  
    const usd = (inr * usdRate).toFixed(2);
    const eur = (inr * eurRate).toFixed(2);
  
    res.status(200).json({ usd, eur });
  }
  