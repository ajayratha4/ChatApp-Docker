import { Box } from "@mui/material";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const socket = io("http://localhost:3002");

const Conversation = () => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  const onSend = (message: string) => {
    socket.emit("send_message", message);
    setMessages((prev) => [...prev, message]);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        height: 1,
        flexDirection: "column",
      }}
    >
      <Messages messages={messages} />
      <MessageInput onSend={onSend} />
    </Box>
  );
};

export default Conversation;
