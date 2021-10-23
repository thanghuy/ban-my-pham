import CFooter from "../../components/CFooter/CFooter";
import CNavBarPhone from "../../components/CNavBarPhone/CNavBarPhone";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const size = useWindowSize();
  return (
    <>
      {" "}
      <CFooter />
      {size < 600 ? <CNavBarPhone /> : ""}
    </>
  );
};
export default Footer;
