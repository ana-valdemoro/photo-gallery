import express from "express";

const app = express();

// settings
app.set("port", process.env.port || 4000);

export default app;
