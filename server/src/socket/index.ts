let users = Object.create({});

export const socket = (io) => {
  io.on("connection", (socket) => {
    console.log("User connected", socket.id);

    socket.on("add_user", (userId) => {
      users[userId] = { socketId: socket.id };
      io.emit("get_users", users);
    });

    socket.on("send_message", (messageObj) => {
      io.to(users[messageObj.receiverId].socketId).emit("receive_message", {
        message: messageObj.message,
        id: messageObj.senderId,
      });
    });
    socket.on("disconnect", () => {
      console.log("User Disconnected", socket.id);
      Object.keys(users).forEach(
        (key) => users[key].socketId === socket.id && delete users[key]
      );
      io.emit("get_users", users);
    });
  });
};
