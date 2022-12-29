import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { Socket } from "socket.io-client";
import useProvider from "hooks/useProvider";

interface Props {
  selectedUser: number;
  socket: Socket;
  userId: number;
}

const Conversation = ({ selectedUser, socket, userId }: Props) => {
  const { user } = useProvider();

  const [messages, setMessages] = useState<string[]>([]);

  useEffect(() => {
    setMessages([]);
  }, [selectedUser]);

  useEffect(() => {
    setMessages((prev) => [...prev, user[selectedUser].message]);
  }, [user[selectedUser].message]);

  const onSend = (message: string) => {
    socket.emit("send_message", {
      message,
      senderId: userId,
      receiverId: Number(selectedUser),
    });
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
        {selectedUser}
      </Typography>
      <Messages messages={messages} />
      <MessageInput onSend={onSend} />
    </Box>
  );
};

export default Conversation;
