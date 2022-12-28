import {
  Avatar,
  Box,
  CardActionArea,
  Divider,
  Paper,
  Typography,
} from "@mui/material";
import { ActionKind } from "context/contextProvider";
import useProvider from "hooks/useProvider";

const ChartList = () => {
  const { dispatch } = useProvider();

  return (
    <Box sx={{ width: 1, height: 1, overflow: "auto" }}>
      <Box
        sx={{
          width: 1,
          display: "flex",
          flexDirection: ["row", "column"],
          gap: 1,
          height: 1,
        }}
      >
        {[
          1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21, 22, 23, 24,
        ].map((item, index) => (
          <Box
            key={index}
            sx={{ height: 1, display: "flex", flexDirection: "column", gap: 1 }}
          >
            <CardActionArea
              sx={{
                display: "flex",
                gap: 1,
                height: 1,
                justifyContent: ["center", "center", "flex-start"],
              }}
              key={index}
              onClick={() => {
                dispatch &&
                  dispatch({
                    type: ActionKind.SETCUSER,
                    payload: { id: item, userName: `Name ${item}` },
                  });
              }}
            >
              <Avatar
                sx={{ width: 50, height: 50 }}
                alt={item.toString()}
                src="/static/images/avatar/1.jpg"
              />

              <Box
                sx={{
                  display: ["none", "none", "flex"],
                  flexDirection: "column",
                }}
              >
                <Typography>{`Name ${item}`}</Typography>
                <Typography>Jan 9, 2014</Typography>
              </Box>
            </CardActionArea>
            <Divider sx={{ display: ["none", "none", "flex"] }} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ChartList;
