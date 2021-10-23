import React from "react";
import CCart from "../../components/CCart/CCart";
import CCartPhone from "../../components/CCart/CCartPhone";
import useWindowSize from "../../hooks/useWindowSize";
const CartModule = () => {
  const size = useWindowSize();
  return (
    <React.Fragment>{size > 900 ? <CCart /> : <CCartPhone />}</React.Fragment>
  );
};
export default CartModule;
