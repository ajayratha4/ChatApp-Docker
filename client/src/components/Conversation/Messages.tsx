import { Box, Typography } from "@mui/material";
import { Message } from "context/contextProvider";

const Messages = ({
  messages,
  userId,
}: {
  messages: Message[];
  userId: number;
}) => {
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
      {messages.map((item, index) => {
        const check = item.senderId === userId;
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: check ? "flex-end" : "flex-start",
              p: 1,
            }}
          >
            <Typography
              sx={{
                // border: 1,
                // borderColor: item ? "info.light" : "secondary.dark",
                background: check
                  ? "linear-gradient(to right, #1976d2, #a2c3ff)"
                  : "linear-gradient(to right, #a2c3ff,#1976d2)",
                borderRadius: 10,
                px: 2,
                py: 0.5,
              }}
            >
              {item.message}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Messages;
