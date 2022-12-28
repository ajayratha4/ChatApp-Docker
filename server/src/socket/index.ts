export const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("send_message", (message) => {
      console.log(message);

      socket.broadcast.emit("receive_message", message);
    });
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
    });
  });
};
