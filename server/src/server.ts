import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./app/routes";
import { db } from "./database/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(process.env.SERVER_PORT, async () => {
  await db.sync();
  console.log(`Server running at http://localhost:${process.env.SERVER_PORT}`);
});
