import express from "express";
import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/socialmedia").then(() => {
  console.log("Mongo is connected ");
});

const app = express();

const Port = 5003;

app.listen(Port, () => {
  console.log(`server is running on port  ${Port}`);
});
