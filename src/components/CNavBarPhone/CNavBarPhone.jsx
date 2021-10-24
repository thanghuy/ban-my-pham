import React from "react";
import AppBar from "@mui/material/AppBar";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CallIcon from "@mui/icons-material/Call";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useRouter } from "next/router";
const CNavBarPhone = () => {
  const router = useRouter();
  const [value, setValue] = React.useState(0);
  return (
    <AppBar position="fixed" color="inherit" sx={{ top: "auto", bottom: 0 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Trang chủ"
          icon={<HomeIcon />}
          onClick={() => router.push("/")}
        />
        <BottomNavigationAction
          label="Đơn hàng"
          icon={<HomeRepairServiceIcon />}
          onClick={() => router.push("/don-hang")}
        />
        <BottomNavigationAction
          label="Liên hệ"
          icon={<CallIcon />}
          onClick={() => router.push("/lien-he")}
        />
        <BottomNavigationAction
          label="Giỏ hàng"
          icon={
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
            </Badge>
          }
          onClick={() => router.push("/gio-hang")}
        />
      </BottomNavigation>
    </AppBar>
  );
};
export default CNavBarPhone;
