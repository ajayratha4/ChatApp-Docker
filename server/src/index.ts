import { socket } from "./socket/index";
import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  path: "/socket",
  cors: {
    origin: "*",
  },
});

app.get("/", (req, res) => {
  res.send("hello");
});

socket(io);

httpServer.listen(3002, () => console.log("connected to 3002"));
