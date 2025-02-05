import express from "express";
import cors from "cors";

const app = express();

app.use(cors()); // Allow frontend to call the backend
app.use(express.json());

app.get("/api/home", (req, res) => {
  res.json({ message: "This is Christine" });
});

export default app;