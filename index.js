import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import tickerRoutes from './routes/Ticker.js';
import dotenv from 'dotenv';

const app = express(); // create express app instance
dotenv.config();

app.use('/tickers', tickerRoutes);
app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
app.use(cors());

// use MongoDB cloud atlas

const CONNECTION_URL = process.env.MONGO_URI;
const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
  // connection successful
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  // conenction unsuccessful
  console.log(err.message);
})

mongoose.set('useFindAndModify', false);