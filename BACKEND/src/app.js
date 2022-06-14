import express from "express";
import cors from "cors";
import db from "./infra/database/index.js";
import routes from "./routes/index.js";

db.hasConnection();

const app = express();

app.use(cors());
app.use(express.json())

app.use(routes);

export default app;
