import React from "react";
import AppBar from "@mui/material/AppBar";
import { IconButton, Toolbar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallIcon from "@mui/icons-material/Call";
import Grid from "@mui/material/Grid";
const CNavBarPhone = () => {
  return (
    <AppBar position="fixed" color="primary" sx={{ top: "auto", bottom: 0 }}>
      <div className="grid grid-cols-4 pl-5 pt-2 pb-2 gap-4" >
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer">
            <HomeIcon />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer">
            <HomeRepairServiceIcon />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer">
            <CallIcon />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon style={{ fill: "white" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
};
export default CNavBarPhone;
