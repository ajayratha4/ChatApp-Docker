import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { Socket } from "socket.io-client";
import useProvider from "hooks/useProvider";
import { ActionKind, Message } from "context/contextProvider";

interface Props {
  selectedUser: number;
  socket: Socket;
  userId: number;
}

const Conversation = ({ selectedUser, socket, userId }: Props) => {
  const { message, dispatch } = useProvider();

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    const a = message.filter(
      (item) =>
        (item.senderId === Number(selectedUser) || item.senderId === userId) &&
        (item.receiverId === userId || item.receiverId === Number(selectedUser))
    );

    setMessages(a);
  }, [selectedUser, message]);

  const onSend = (message: string) => {
    const variable = {
      message,
      senderId: userId,
      receiverId: Number(selectedUser),
      time: new Date(),
    };
    socket.emit("send_message", variable);
    dispatch({
      type: ActionKind.SETUSERSMESSAGE,
      payload: variable,
    });
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
      <Messages messages={messages} userId={userId} />
      <MessageInput onSend={onSend} />
    </Box>
  );
};

export default Conversation;
