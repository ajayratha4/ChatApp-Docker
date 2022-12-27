import { Box, Typography } from "@mui/material";
import React from "react";

enum MessageType {
  SEND,
  RECEIVE,
}

const messages = [
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.SEND, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.SEND, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
  { messageType: MessageType.SEND, message: "Hi" },
  { messageType: MessageType.RECEIVE, message: "Hello" },
];
const Messages = () => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        width: 1,
        height: 1,
        overflow: "auto",
        p: 1,
      }}
    >
      {messages.map(({ message, messageType }, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: messageType ? "flex-end" : "flex-start",
              p: 1,
            }}
          >
            <Typography
              sx={{
                border: 1,
                borderColor: messageType ? "info.light" : "secondary.dark",
                borderRadius: 10,
                px: 2,
                py: 0.5,
              }}
            >
              {message}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Messages;
