import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
const CNavBarPhone = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <Toolbar>
        <IconButton color="inherit" aria-label="open drawer">
          <MenuIcon />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit"></IconButton>
        <IconButton color="inherit"></IconButton>
      </Toolbar>
    </AppBar>
  );
};
export default CNavBarPhone;
