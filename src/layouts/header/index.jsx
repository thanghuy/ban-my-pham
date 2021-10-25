import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CHeaderMiddle from "../../components/CHeader/CHeaderMiddle";
import CHeaderTop from "../../components/CHeader/CHeaderTop";
import CHeaderMiddlePhone from "../../components/CHeaderPhone/CHeaderMiddle";
import CHeaderTopPhone from "../../components/CHeaderPhone/CHeaderTop";
import useWindowSize from "../../hooks/useWindowSize";
import { setAddToCart } from "../../redux/controller/cart.slice";

const Header = () => {
  const size = useWindowSize();
  const { inforCart } = useSelector(state => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const listCart = localStorage.getItem("cartItem");
    if(listCart){
      dispatch(setAddToCart(JSON.parse(listCart)))
    }
  },[])
  return (
    <div style={{ backgroundColor: "#ff175a" }}>
      {size > 900 ? <CHeaderTop /> : <CHeaderTopPhone />}
      {size > 900 ? <CHeaderMiddle inforCart={inforCart} /> : <CHeaderMiddlePhone />}
      {/* {size > 900 ? <CHeaderNavBar /> : ""} */}
    </div>
  );
};
export default Header;
