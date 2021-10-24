import React from "react";
import SearchIcon from "@mui/icons-material/Search";
const CHeaderMiddlePhone = () => {
  return (
    <div
      className={`grid ms:grid-cols-2 gap-4 px-2 items-center`}
      style={{ height: 80 }}
    >
      <div className="col-span-2">
        <div className="bg-white p-1 rounded-lg flex" style={{ height: 50 }}>
          <input
            className="w-full rounded p-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
          />
          <button
            className="hover:bg-red-300 rounded-lg text-black"
            style={{ width: 50, backgroundColor: "#ffd429" }}
          >
            <SearchIcon color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};
export default CHeaderMiddlePhone;
