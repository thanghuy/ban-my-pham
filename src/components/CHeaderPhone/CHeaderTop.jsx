import React from "react";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
import Drawer from "@mui/material/Drawer";
const CHeaderTopPhone = () => {
  const [showMenuListLeft, setShowMenuListLeft] = React.useState(false);
  const [showMenuListRight, setShowMenuListRight] = React.useState(false);

  const toggleDrawerLeft = (open) => (e) => {
    setShowMenuListLeft(open);
  };
  const toggleDrawerRight = (open) => (e) => {
    setShowMenuListRight(open);
  };
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
              src="https://adiviet.vn/assets/images/adivietlogowebstie.svg"
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
        <div style={{ width: "14rem" }}>huythang</div>
      </Drawer>
      <Drawer
        anchor={"right"}
        open={showMenuListRight}
        onClose={toggleDrawerRight(false)}
      >
        <div style={{ width: "14rem" }}>huythang</div>
      </Drawer>
    </div>
  );
};
export default CHeaderTopPhone;
