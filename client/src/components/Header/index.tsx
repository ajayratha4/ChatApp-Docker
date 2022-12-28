import { AppBar, Box, IconButton, Typography } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import useProvider from "hooks/useProvider";
import { ActionKind } from "context/contextProvider";

const Header = () => {
  const { isDark, dispatch } = useProvider();

  return (
    <AppBar position="static">
      <Box
        sx={{
          height: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 2,
        }}
      >
        <Box>
          <Typography variant="h6">Home</Typography>
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              dispatch &&
                dispatch({ type: ActionKind.SETTHEMECOLOR, payload: !isDark });
            }}
          >
            {isDark ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Box>
      </Box>
    </AppBar>
  );
};

export default Header;
