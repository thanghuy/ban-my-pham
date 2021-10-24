import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useRouter } from "next/router";

const CHeaderMiddle = () => {
  const router = useRouter();
  const [isFixedMenu, setFixedMenu] = useState(false);
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
 
  return (
    <div
      className={`${isFixedMenu ? "fixed-menu-bar" : ""} grid grid-cols-12 gap-4 px-20 items-center`}
      style={{ height: 80 }}
    >
      <div className="col-span-3">
        <Link href="/">
          <a>
            <img
              src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/logo_dae52ba6-8214-40c5-9a44-d0c32a233d1f_215x.png?v=1615803687"
              width="200"
              height="60"
            />
          </a>
        </Link>
      </div>
      <div className="col-span-6">
        <div className="bg-white p-1 rounded-lg flex" style={{ height: 50 }}>
          <input
            className="w-full rounded p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button
            className="hover:bg-red-300 rounded-lg text-black"
            style={{ width: 50, backgroundColor: "#ffd429" }}
            onClick={() => router.push("/danh-sach-san-pham")}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center gap-2">
        <div
          className="bg-opacity-75 p-5 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 50, backgroundColor: "#ffffff" }}
          onClick={() => router.push("/gio-hang")}
        >
          <PersonOutlineIcon />
        </div>
        <div
          className="bg-opacity-75 p-5 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 50, backgroundColor: "#ffd429" }}
          onClick={() => router.push("/gio-hang")}
        >
          <label className="text-black font-semibold cursor-pointer">
            Giỏ hàng
          </label>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default CHeaderMiddle;
