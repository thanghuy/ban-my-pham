import React from "react";
import Link from "next/link";
import SearchIcon from "@mui/icons-material/Search";
const CHeaderMiddlePhone = () => {
  return (
    <div
      className="grid ms:grid-cols-2 gap-4 px-2 items-center"
      style={{ height: 80 }}
    >
      <div className="col-span-2">
        <div
          className="bg-white p-1 rounded flex"
          style={{ height: 50 }}
        >
          <input
            className="w-full rounded p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button className="bg-red-400 hover:bg-red-300 rounded text-white" style={{ width: 50 }}>
            <SearchIcon color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CHeaderMiddlePhone;
