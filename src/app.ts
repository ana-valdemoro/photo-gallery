import express from "express";
import morgan from "morgan";

const app = express();

// settings
app.set("port", process.env.port || 4000);

// middleware
app.use(morgan("dev"));

export default app;
