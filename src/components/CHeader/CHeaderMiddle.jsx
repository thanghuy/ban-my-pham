import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRouter } from "next/router"

const CHeaderMiddle = () => {
  const router = useRouter()
  return (
    <div
      className="grid grid-cols-12 gap-4 px-20 items-center"
      style={{ height: 80 }}
    >
      <div className="col-span-3">
        <Link href="/">
          <a>
            <img
              src="https://adiviet.vn/assets/images/adivietlogowebstie.svg"
              width="200"
              height="60"
            />
          </a>
        </Link>
      </div>
      <div className="col-span-6">
        <div
          className="bg-white p-1 rounded-lg flex"
          style={{ height: 50 }}
        >
          <input
            className="w-full rounded p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button
            className="hover:bg-red-300 rounded-lg text-white"
            style={{ width: 50, backgroundColor: "#ff7c00" }}
            onClick={() => router.push("/danh-sach-san-pham")}
          >
            <SearchIcon />
          </button>
        </div>
      </div>
      <div className="col-span-3 flex justify-end items-center">
        <div
          className="bg-opacity-75 p-5 rounded-lg flex items-center gap-3 cursor-pointer"
          style={{ height: 50, backgroundColor: "#ff7c00" }}
          onClick={() => router.push("/gio-hang")}
        >
          <label className="text-white font-semibold cursor-pointer">Giỏ hàng</label>
          <Badge badgeContent={4} color="primary">
            <ShoppingCartIcon style={{ fill: "white" }} />
          </Badge>
        </div>
      </div>
    </div>
  );
};
export default CHeaderMiddle;
