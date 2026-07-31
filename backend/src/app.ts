import express from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import healthRoutes from "./routes/health.routes.js";
import {errorHandler} from "./middlewares/error.middleware.js";
import {notFoundHandler} from "./middlewares/notFound.middleware.js"

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

app.use("/health", healthRoutes)
app.use(notFoundHandler);

app.use(errorHandler);

export default app;