import dns from "dns";

dns.setDefaultResultOrder("ipv4first");
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();


// Middleware

app.use(cors());

app.use(express.json());


// Routes

app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "FM Nexa Backend API is running",
  });
});

// MongoDB

mongoose
  .connect(process.env.MONGO_URI, {
    family: 4,
  })
  .then(() => {
    console.log("MongoDB connected");

    app.listen(process.env.PORT || 8030, () => {
      console.log(
        `Server running on port ${process.env.PORT || 8030}`
      );
    });
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });