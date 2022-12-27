import { useState } from "react";
import { Box, Button, Input } from "@mui/material";

interface Props {
  onSend: (arg: string) => void;
}

const MessageInput = ({ onSend }: Props) => {
  const [message, setMessage] = useState("");
  const onClickSend = () => {
    setMessage("");
    onSend(message);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: 1,
        height: 50,
        p: 1,
        gap: 1,
      }}
    >
      <Input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        fullWidth
        disableUnderline
        placeholder="Message"
        sx={{
          width: 1,
          border: 1,
          minWidth: 100,
          borderColor: "grey.500",
          borderRadius: 1,
          px: 0.4,
          ".MuiInput-input::placeholder": {
            fontStyle: "italic",
          },
        }}
      />
      <Button variant="outlined" onClick={onClickSend}>
        send
      </Button>
    </Box>
  );
};

export default MessageInput;
