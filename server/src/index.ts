import { socket } from "./socket/index";
import express from "express";
import { createServer } from "http";
import mongoose from "mongoose";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  path: "/socket",
  cors: {
    origin: "*",
  },
});

mongoose
  .connect(process.env.DB || "mongodb://localhost:27017")
  .then((res) => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log("===============err===============", err);
  });

app.get("/", (req, res) => {
  res.send("hello");
});

socket(io);

httpServer.listen(3002, () => console.log("connected to 3002"));
