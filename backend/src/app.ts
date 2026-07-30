import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

// Security headers
app.use(helmet());

// Allow requests from the frontend
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Parse JSON request bodies
app.use(express.json());

// Parse cookies
app.use(cookieParser());

export default app;