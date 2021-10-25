import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
const CHeaderTop = () => {
  const router = useRouter();
  return (
    <div
      className="w-full flex gap-4 justify-end items-center px-20 py-1"
      style={{ backgroundColor: "#00000014" }}
    >
      <ul className="flex">
        <li className="mr-6">
          <Link href="/gioi-thieu">
            <a className="text-white font-semibold">Giới thiệu</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/lien-he">
            <a className="text-white font-semibold">Liên hệ</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/don-hang">
            <a className="text-white font-semibold">Đơn hàng</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default CHeaderTop;
