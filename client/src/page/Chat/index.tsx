import { Box, Grid, Typography } from "@mui/material";
import ChatList from "components/ChatList";
import Conversation from "components/Conversation";
import { ActionKind } from "context/contextProvider";
import useProvider from "hooks/useProvider";
import useSocket from "hooks/useSocket";
import { useEffect } from "react";
const userId = Math.floor(Math.random() * 10000);

const Chat = () => {
  const { user, selectedUser, dispatch } = useProvider();
  const { socket } = useSocket();

  useEffect(() => {
    socket.emit("add_user", userId);
    socket.on("get_users", (data) => {
      dispatch({
        type: ActionKind.SETUSERS,
        payload: data,
      });
    });
    socket.on("receive_message", (data) => {
      dispatch({
        type: ActionKind.SETUSERSMESSAGE,
        payload: data,
      });
    });
  }, [userId]);

  return (
    <Grid container sx={{ height: 1, overflow: "auto" }}>
      <Grid
        xs={12}
        sm={2}
        md={3}
        item
        sx={{
          p: [0.1, 0.1, 1],
          height: [80, 1],
          minWidth: 65,
          borderRight: [0, 1],
          borderBottom: [1, 0],
          borderColor: "primary.main",
        }}
      >
        <ChatList user={user} />
      </Grid>

      <Grid
        xs={12}
        sm={10}
        md={9}
        item
        sx={{ height: ["calc(100% - 80px)", 1] }}
      >
        {selectedUser ? (
          <Conversation
            selectedUser={selectedUser}
            socket={socket}
            userId={userId}
          />
        ) : (
          <Box
            sx={{
              display: "flex",
              width: 1,
              height: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography variant="h5">
              Choose one of the conversation...
            </Typography>
          </Box>
        )}
      </Grid>
    </Grid>
  );
};

export default Chat;
