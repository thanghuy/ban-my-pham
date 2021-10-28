import { useSelector } from "react-redux";
import CFooter from "../../components/CFooter/CFooter";
import CNavBarPhone from "../../components/CNavBarPhone/CNavBarPhone";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const size = useWindowSize();
  const { inforCart } = useSelector(state => state.cart);
  return (
    <>
      {" "}
      <CFooter />
      {size < 600 ? <CNavBarPhone inforCart={inforCart} /> : ""}
    </>
  );
};
export default Footer;
