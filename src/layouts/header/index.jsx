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
    <div style={{ backgroundColor: "#ff175a" }}>
      {size > 900 ? <CHeaderTop /> : <CHeaderTopPhone />}
      {size > 900 ? <CHeaderMiddle /> : <CHeaderMiddlePhone />}
      {size > 900 ? <CHeaderNavBar /> : ""}
    </div>
  );
};
export default Header;
