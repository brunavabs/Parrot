import express from 'express';
import db from './infra/database/index.js';
import cors from 'cors';

db.hasConnection();

const app = express()

app.use(cors());




export default app;