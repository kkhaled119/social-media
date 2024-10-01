import express from "express";

const app = express();

const Port = 5003;

app.listen(Port, () => {
  console.log(`server is running on port  ${Port}`);
});
