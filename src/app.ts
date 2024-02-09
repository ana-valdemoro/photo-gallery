import express from "express";
import morgan from "morgan";
import indexRoutes from "./routes/index";

const app = express();

// settings
app.set("port", process.env.port || 4000);

// middleware
app.use(morgan("dev"));

// routes
app.use("/api", indexRoutes);

export default app;
