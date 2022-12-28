import { Box, Typography } from "@mui/material";

const Messages = ({ messages }: { messages: string[] }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 1,
        flexDirection: "column",
        width: 1,
        height: 1,
        overflow: "auto",
        p: [0, 0, 1],
      }}
    >
      {messages.map((item, index) => {
        return (
          <Box
            key={index}
            sx={{
              display: "flex",
              justifyContent: item ? "flex-end" : "flex-start",
              p: 1,
            }}
          >
            <Typography
              sx={{
                border: 1,
                borderColor: item ? "info.light" : "secondary.dark",
                borderRadius: 10,
                px: [0, 0, 2],
                py: [0, 0, 0.5],
              }}
            >
              {item}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default Messages;
