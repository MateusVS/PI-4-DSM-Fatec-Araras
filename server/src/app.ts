import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import routes from "./app/routes";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

export default app;
