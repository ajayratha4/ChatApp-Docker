import { Grid } from "@mui/material";
import ChatList from "components/ChatList";
import Conversation from "components/Conversation";

const Chart = () => {
  return (
    <Grid container sx={{ height: 1, overflow: "hidden" }}>
      <Grid
        xs={4}
        md={3}
        item
        sx={{ backgroundColor: "primary.light", p: 1, height: 1 }}
      >
        <ChatList />
      </Grid>
      <Grid xs={8} md={9} item sx={{ height: 1 }}>
        <Conversation />
      </Grid>
    </Grid>
  );
};

export default Chart;
