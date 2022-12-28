import { Box, Grid, Typography } from "@mui/material";
import ChatList from "components/ChartList";
import Conversation from "components/Conversation";
import useProvider from "hooks/useProvider";

const Chart = () => {
  const { user } = useProvider();

  return (
    <Grid container sx={{ height: 1, overflow: "auto" }}>
      <Grid
        xs={12}
        sm={2}
        md={3}
        item
        sx={{ p: [0.1, 0.1, 1], height: [80, 1], minWidth: 65 }}
      >
        <ChatList />
      </Grid>

      <Grid
        xs={12}
        sm={10}
        md={9}
        item
        sx={{ height: ["calc(100% - 80px)", 1] }}
      >
        {user ? (
          <Conversation user={user} />
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

export default Chart;
