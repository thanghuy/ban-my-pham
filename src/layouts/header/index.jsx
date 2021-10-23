import React from "react";
import CHeaderMiddle from "../../components/CHeader/CHeaderMiddle";
import CHeaderNavBar from "../../components/CHeader/CHeaderNavBar";
import CHeaderTop from "../../components/CHeader/CHeaderTop";
import CHeaderMiddlePhone from "../../components/CHeaderPhone/CHeaderMiddle";
import CHeaderTopPhone from "../../components/CHeaderPhone/CHeaderTop";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const size = useWindowSize();
  return (
    <div style={{ backgroundColor: "#161880" }}>
      {size > 600 ? <CHeaderTop /> : <CHeaderTopPhone />}
      {size > 600 ? <CHeaderMiddle /> : <CHeaderMiddlePhone />}
      {size > 600 ? <CHeaderNavBar /> : ""}
    </div>
  );
};
export default Header;
