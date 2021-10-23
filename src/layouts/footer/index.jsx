import CNavBarPhone from "../../components/CNavBarPhone/CNavBarPhone";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const size = useWindowSize();
  return <>{size < 600 ? <CNavBarPhone /> : ""}</>;
};
export default Footer;
