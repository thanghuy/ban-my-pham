import React from "react";
import Link from "next/link";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DehazeIcon from "@mui/icons-material/Dehaze";
const CHeaderTopPhone = () => {
  return (
    <div className="grid grid-cols-3 gap-4 px-2 pt-3 items-center">
      <div className="col-span-1">
        <button>
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
        <button>
          <PersonOutlineIcon style={{ fill: "white" }} />
        </button>
      </div>
    </div>
  );
};
export default CHeaderTopPhone;
