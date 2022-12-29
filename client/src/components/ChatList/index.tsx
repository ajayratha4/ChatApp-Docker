import {
  Avatar,
  Box,
  CardActionArea,
  Divider,
  Typography,
} from "@mui/material";
import { ActionKind, User } from "context/contextProvider";
import useProvider from "hooks/useProvider";

interface Props {
  user: User[];
}

const ChatList = ({ user }: Props) => {
  const { selectedUser, dispatch } = useProvider();

  return (
    <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: ["row", "column"],
          gap: 1,
          height: [1, "auto"],
        }}
      >
        {Object.keys(user).map((key) => {
          return (
            <Box
              key={key}
              sx={{
                height: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <CardActionArea
                sx={{
                  display: "flex",
                  gap: 1,
                  height: 1,
                  maxHeight: 80,
                  justifyContent: ["center", "center", "flex-start"],
                  backgroundColor:
                    Number(key) === Number(selectedUser)
                      ? "action.selected"
                      : "background.paper",
                }}
                onClick={() => {
                  dispatch({
                    type: ActionKind.SETSELECTEDUSER,
                    payload: key,
                  });
                }}
              >
                <Avatar
                  sx={{ width: 50, height: 50 }}
                  alt={key.toString()}
                  src="/static/images/avatar/1.jpg"
                />

                <Box
                  sx={{
                    display: ["none", "none", "flex"],
                    flexDirection: "column",
                  }}
                >
                  <Typography>{`Name ${key}`}</Typography>
                  <Typography>Jan 9, 2014</Typography>
                </Box>
              </CardActionArea>
              <Divider sx={{ display: ["none", "none", "flex"] }} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default ChatList;
