import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
config();
const app = express();
import appRouter from "./routes/index.js";

//middlewares
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

//remove it in production
app.use(morgan("dev"));

app.use("/api/SKD", appRouter);

export default app;
