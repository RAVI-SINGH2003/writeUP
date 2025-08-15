import express from "express";
import { config } from "dotenv";
import { connectDB } from "./db/db.js";
import contentRouter from "./routes/contentRouter.js";
import cors from "cors";

config();
connectDB();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST"],
  })
);

app.use(express.json());

app.use("/api/v1", contentRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
