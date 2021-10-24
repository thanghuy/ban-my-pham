import React from "react";
import Link from "next/link";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Rating from "@mui/material/Rating";
const CProduct = ({ className }) => {
  return (
    <div
      className={`${className} transition duration-500 ease-in-out bg-white rounded-lg p-3 hover:grow shadow-lg transform hover:-translate-y-1 hover:scale-1`}
    >
      <Link href="/chi-tiet/[slug]" as={"/chi-tiet/huythang"}>
        <a>
          <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
          <div className="pt-3 flex items-center justify-between">
            <p className="font-semibold sm:text-xs xl:text-base lg:text-base md:text-base">Kem Dưỡng La Roche-Posay Làm Dịu...</p>
          </div>
        </a>
      </Link>
      <div className="w-full flex items-center gap-4">
        <p className="custom-font-size pt-1 font-semibold text-red-600">5.000.000 VNĐ</p>
        <strike className="custom-font-size pt-1 font-semibold text-gray-400 text-xs">
          500.000 VNĐ
        </strike>
      </div>
      <div className="w-full mt-3">
        <Rating size="small" name="read-only" value={4} readOnly />
      </div>
      <div className="w-full mt-3 flex">
        {/* <button className="w-1/4">
          <VisibilityIcon />
        </button> */}
        <button
          className="w-full text-black font-semibold rounded-lg"
          style={{ backgroundColor: "#ffd429", height: 35 }}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default CProduct;
