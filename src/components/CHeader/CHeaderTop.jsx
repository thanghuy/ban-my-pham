import React from "react";
import { useRouter } from "next/router";
const CHeaderTop = () => {
  const router = useRouter();
  return (
    <div className="w-full flex gap-4 justify-end items-center px-20 py-1">
      <button className="text-white" onClick={() => router.push("/don-hang")}>
        Đơn hàng
      </button>
    </div>
  );
};
export default CHeaderTop;
