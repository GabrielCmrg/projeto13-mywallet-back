export * as userDb from './userDb.js';

import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const client = MongoClient(process.env.MONGO_URI);
let db;
client.connect().then(() => {
    db = client.db(process.env.DB_NAME);
});

export { db };