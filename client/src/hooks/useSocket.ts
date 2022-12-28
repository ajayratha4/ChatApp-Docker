import { io } from "socket.io-client";

const useSocket = () => {
  const socket = io("http://localhost:3002", {
    path: "/socket",
  });

  const socketIo = (event: string, message: string) => {
    socket.emit(event, message);
  };

  return { socket, socketIo };
};

export default useSocket;
