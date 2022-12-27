import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Box,
} from "@mui/material";

const ChatList = () => {
  return (
    <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
      <List sx={{ width: 1 }}>
        {[
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ].map((item, index) => (
          <ListItem key={index}>
            <ListItemAvatar>
              <Avatar alt={item.toString()} src="/static/images/avatar/1.jpg" />
            </ListItemAvatar>
            <ListItemText primary={`Name ${item}`} secondary="Jan 9, 2014" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ChatList;
