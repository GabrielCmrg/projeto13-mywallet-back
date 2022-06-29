import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
console.log('CORS enabled');
app.use(express.json());
console.log('JSON enabled');

const PORT = process.env.PORT;
const SERVER_URI = process.env.SERVER_URI;
app.listen(PORT, () => {
    console.log(`App running on: ${SERVER_URI}:${PORT}`);
});