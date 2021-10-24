import React from "react";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Drawer from "@mui/material/Drawer";
import ListMenuPhone from "./CListMenu";
const CHeaderTopPhone = () => {
  const [showMenuListLeft, setShowMenuListLeft] = React.useState(false);
  const [showMenuListRight, setShowMenuListRight] = React.useState(false);

  const toggleDrawerLeft = (open) => (e) => {
    setShowMenuListLeft(open);
  };
  const toggleDrawerRight = (open) => (e) => {
    setShowMenuListRight(open);
  };
  const menu = [
    {
      key: 1,
      name: "Trang chủ",
      link: "/"
    },
    {
      key: 2,
      name: "Sản phẩm",
      link: "/danh-sach-san-pham"
    },
    {
      key: 3,
      name: "Làm đẹp",
      link: "/danh-sach-san-pham"
    },
    {
      key: 4,
      name: "Giới thiệu",
      link: "/gioi-thieu"
    },
    {
      key: 5,
      name: "Liên hệ",
      link: "/lien-he"
    }
  ]
  const menuUser = [
    {
      key: 1,
      name: "Theo dõi đơn hàng",
      link: "/don-hang"
    },
    {
      key: 2,
      name: "Đăng nhập",
      link: "/dang-nhap"
    },
    {
      key: 3,
      name: "Đăng ký",
      link: "/dang-ky"
    }
  ]
  return (
    <div className="grid grid-cols-3 gap-4 px-2 pt-3 items-center">
      <div className="col-span-1">
        <button
          onClick={toggleDrawerLeft(true)}
          onKeyDown={toggleDrawerLeft(false)}
        >
          <DehazeIcon style={{ fill: "white" }} />
        </button>
      </div>
      <div className="col-span-1">
        <Link href="/">
          <a>
            <img
              src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/logo_1f074a2f-7556-4816-864f-646cecc13d65_200x70.png?v=1614950171"
              width="100"
              height="60"
            />
          </a>
        </Link>
      </div>
      <div className="col-span-1 flex justify-end">
        <button
          onClick={toggleDrawerRight(true)}
          onKeyDown={toggleDrawerRight(false)}
        >
          <PersonOutlineIcon style={{ fill: "white" }} />
        </button>
      </div>
      <Drawer
        anchor={"left"}
        open={showMenuListLeft}
        onClose={toggleDrawerLeft(false)}
      >
        <ListMenuPhone setShowMenuListLeft={setShowMenuListLeft} setShowMenuListRight={setShowMenuListRight}  arrMenu={menu} />
      </Drawer>
      <Drawer
        anchor={"right"}
        open={showMenuListRight}
        onClose={toggleDrawerRight(false)}
      >
        <ListMenuPhone setShowMenuListLeft={setShowMenuListLeft} setShowMenuListRight={setShowMenuListRight} arrMenu={menuUser} />
      </Drawer>
    </div>
  );
};
export default CHeaderTopPhone;
