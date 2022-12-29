import { useMemo } from "react";
import { io } from "socket.io-client";

const useSocket = () => {
  const socket = useMemo(
    () =>
      io("http://localhost:3002", {
        path: "/socket",
      }),
    []
  );

  return { socket };
};

export default useSocket;
