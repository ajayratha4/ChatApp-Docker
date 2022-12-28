import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { User } from "context/contextProvider";
import { io } from "socket.io-client";

interface Props {
  user: User;
}
const socket = io("http://localhost:3002", {
  path: "/socket",
});

const Conversation = ({ user }: Props) => {
  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages([]);
  }, [user]);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
    socket.on("connect", () => {
      console.log(socket.id);
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
      <Typography
        sx={{
          display: "flex",
          width: 1,
          justifyContent: "center",
        }}
      >
        {user.userName}
      </Typography>
      <Messages messages={messages} />
      <MessageInput onSend={onSend} />
    </Box>
  );
};

export default Conversation;
