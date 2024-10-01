import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoute.js"; // تأكد من صحة مسار ملف userRoute.js

mongoose
  .connect("mongodb://localhost:27017/socialmedia")
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const app = express();

const Port = 5003;

app.use("/user", userRoutes);

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});
