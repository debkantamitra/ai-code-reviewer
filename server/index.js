import express from 'express';
import cors from 'cors';
import { reviewCode } from './services.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/review', async (req, res) => { 
  const review = await reviewCode(req.body.code);

  if (review.success) {
    res.json({ review: review.review });
  } else {
    res.status(500).json({ error: "Failed to review code" });
  }
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});