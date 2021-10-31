import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CHeaderMiddle from "../../components/CHeader/CHeaderMiddle";
import CHeaderTop from "../../components/CHeader/CHeaderTop";
import CHeaderMiddlePhone from "../../components/CHeaderPhone/CHeaderMiddle";
import CHeaderTopPhone from "../../components/CHeaderPhone/CHeaderTop";
import useWindowSize from "../../hooks/useWindowSize";
import { setAddToCart } from "../../redux/controller/cart.slice";

import Breadcrumbs from "@mui/material/Breadcrumbs";
import { emphasize, styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";

import { useRouter } from "next/router";
import Utils from "../../common/utils";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === "light"
      ? theme.palette.grey[100]
      : theme.palette.grey[800];
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const Header = () => {
  const size = useWindowSize();
  const router = useRouter();
  const { inforCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    const listCart = localStorage.getItem("cartItem");
    if (listCart) {
      dispatch(setAddToCart(JSON.parse(listCart)));
    }
  }, []);

  return (
    <React.Fragment>
      <div style={{ backgroundColor: "#ff175a" }}>
        {size > 900 ? <CHeaderTop /> : <CHeaderTopPhone />}
        {size > 900 ? (
          <CHeaderMiddle inforCart={inforCart} />
        ) : (
          <CHeaderMiddlePhone />
        )}
        {/* {size > 900 ? <CHeaderNavBar /> : ""} */}
      </div>
      <div className="mx-auto xl:px-20 lg:px-20 md:px-20 sm:px-2 mt-1 mb-5">
        <Breadcrumbs aria-label="breadcrumb">
          <StyledBreadcrumb
            component="a"
            onClick={() => router.push("/")}
            label="Trang chủ"
            icon={<HomeIcon fontSize="small" />}
          />
          {Utils.convertTitle(router.pathname) === false ? (
            ""
          ) : (
            <StyledBreadcrumb
              component="a"
              href="#"
              label={Utils.convertTitle(router.pathname)}
            />
          )}
        </Breadcrumbs>
      </div>
    </React.Fragment>
  );
};
export default Header;
