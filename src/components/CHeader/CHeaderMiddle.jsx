import React, { useEffect, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useRouter } from "next/router";
import { styled } from "@mui/system";
import ListMenuPhone from "../CHeaderPhone/CListMenu";
import { Drawer, SvgIcon } from "@mui/material";
import { menuList } from "../../common/defaultMenu";


const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    padding: '0 4px',
  },
}));

const CHeaderMiddle = ({inforCart}) => {
  const router = useRouter();
  const [isFixedMenu, setFixedMenu] = useState(false);
  const [showMenuListLeft, setShowMenuListLeft] = React.useState(false);

  const handleScroll = () => {
    if(window.scrollY >= 100){
      setFixedMenu(true)
    }
    else{
      setFixedMenu(false)
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  const toggleDrawerLeft = (open) => (e) => {
    setShowMenuListLeft(open);
  };
  return (
    <div
      className={`${isFixedMenu ? "fixed-menu-bar" : ""} grid grid-cols-12 gap-4 px-20 items-center`}
      style={{ height: 80 }}
    >
      <div className="col-span-3 flex gap-x-5 items-center">
        <Link href="/">
          <a>
            <img
              src="/logo.svg"
              width="150"
              height="40"
            />
          </a>
        </Link>
        <div className="p-3 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 40, backgroundColor: "white" }} 
          onClick={() => setShowMenuListLeft(true)}  
        >
          <DehazeIcon />
        </div>
      </div>
      <div className="col-span-6">
        <div className="bg-white rounded-lg flex" style={{ height: 40 }}>
          <input
            className="w-full rounded-lg p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button
            className="hover:bg-red-300 flex items-center justify-center rounded-lg text-black"
            style={{ width: 50, backgroundColor: "#ffd429" }}
            onClick={() => router.push("/san-pham")}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center gap-2">
        <div
          className="bg-opacity-75 p-5 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 40, backgroundColor: "#ffffff" }}
          onClick={() => router.push("/gio-hang")}
        >
          <PersonOutlineIcon />
        </div>
        <div
          className="bg-opacity-75 p-5 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 40, backgroundColor: "#ffd429" }}
          onClick={() => router.push("/gio-hang")}
        >
          <label className="text-black font-semibold cursor-pointer">
            Giỏ hàng
          </label>
          <StyledBadge badgeContent={inforCart.totalAmount} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </div>
      </div>
      <Drawer
        anchor={"left"}
        open={showMenuListLeft}
        onClose={toggleDrawerLeft(false)}
      >
        <ListMenuPhone setShowMenuListLeft={setShowMenuListLeft} setShowMenuListRight={setShowMenuListLeft}  arrMenu={menuList} />
      </Drawer>
    </div>
  );
};
export default CHeaderMiddle;
