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
import { useRouter } from "next/router"
const CNavBarPhone = () => {
  const router = useRouter()
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
      <div className="grid grid-cols-4 pl-5 pt-2 pb-2 gap-4" >
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer" onClick={() => router.push("/")}>
            <HomeIcon style={{ fill: "#b5b5b5" }} />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer" onClick={() => router.push("/don-hang")}>
            <HomeRepairServiceIcon style={{ fill: "#b5b5b5" }} />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer" onClick={() => router.push("/lien-he")}>
            <CallIcon style={{ fill: "#b5b5b5" }} />
          </IconButton>
        </div>
        <div className="col-span-1">
          <IconButton color="inherit" aria-label="open drawer" onClick={() => router.push("/gio-hang")}>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon style={{ fill: "#b5b5b5" }} />
            </Badge>
          </IconButton>
        </div>
      </div>
    </AppBar>
  );
};
export default CNavBarPhone;
