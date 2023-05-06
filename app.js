import express from "express";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
// import { userRouter } from "./routes/auth.js";

const app = express();

// Setting up middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors());

// app.use("/api/auth", userRouter);

export default app;
