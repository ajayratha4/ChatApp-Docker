import { Box } from "@mui/material";
import Messages from "./Messages";
import MessageInput from "./MessageInput";

const Conversation = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        height: 1,
        flexDirection: "column",
      }}
    >
      <Messages />
      <MessageInput />
    </Box>
  );
};

export default Conversation;
