import React from "react";
import Link from "next/link";
const CHeaderNavBar = () => {
  return (
    <div className="w-full flex gap-4 items-center px-20 py-2">
      <ul className="flex">
        <li className="mr-6">
          <Link href="/">
            <a className="text-white font-semibold">Trang chủ</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/danh-sach-san-pham">
            <a className="text-white font-semibold">Sản phẩm</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/danh-sach-san-pham">
            <a className="text-white font-semibold">Chăm sóc da</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/danh-sach-san-pham">
            <a className="text-white font-semibold">Trang điểm</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/danh-sach-san-pham">
            <a className="text-white font-semibold">Nước hoa</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/gioi-thieu">
            <a className="text-white font-semibold">Giới thiệu</a>
          </Link>
        </li>
        <li className="mr-6">
          <Link href="/lien-he">
            <a className="text-white font-semibold">
              Liên hệ
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default CHeaderNavBar;
