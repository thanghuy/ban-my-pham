import React from "react";
import Link from "next/link";
import Rating from "@mui/material/Rating";
import { useDispatch } from "react-redux";
import { setIsAlert } from "../../redux/controller/boostrap.slice";
import { listCartDefaut } from "../../common/defaultMenu";
import { setAddToCart } from "../../redux/controller/cart.slice";
import CartService from "../../services/cart";
import { useSelector } from "react-redux";
const CProduct = ({ className, item }) => {
  const dispatch = useDispatch();
  const { listCart} = useSelector(state => state.cart);
  const handelAddToCart = (idProduct) => {
    dispatch(setIsAlert({
      isAlert: true,
      titleAlert: "Thêm giỏ hàng thành công"
    }))
    const cart = {
      idProduct: idProduct,
      nameProduct: "demo 1",
      slug: "demo-1",
      brand: "thuong hieu 1",
      image: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
      price: 15000,
      amount: 1,
      total: 30000,
    }
    const listCartItem = CartService.handleAddToCart(listCart, cart);
    dispatch(setAddToCart(listCartItem))
  };
  return (
    <div
      className={`${className} bg-white rounded-lg p-3 hover:grow shadow-lg`}
    >
      <Link href="/chi-tiet/[slug]" as={"/chi-tiet/huythang"}>
        <a>
          <img src="https://images.unsplash.com/photo-1449247709967-d4461a6a6103?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=400&q=80" />
          <div className="pt-3 flex items-center justify-between">
            <p className="font-semibold sm:text-xs xl:text-base lg:text-base md:text-base">
              {item.nameProduct}
            </p>
          </div>
        </a>
      </Link>
      <div className="w-full flex items-center gap-4">
        <p className="custom-font-size pt-1 font-semibold text-red-600">
          5.000.000 VNĐ
        </p>
        <strike className="custom-font-size pt-1 font-semibold text-gray-400 text-xs">
          500.000 VNĐ
        </strike>
      </div>
      <div className="w-full mt-3">
        <Rating size="small" name="read-only" value={4} readOnly />
      </div>
      <div className="w-full mt-3 flex">
        {/* <button className="w-1/4">
          <VisibilityIcon />
        </button> */}
        <button
          className="w-full text-black font-semibold rounded-lg"
          style={{ backgroundColor: "#ffd429", height: 35 }}
          onClick={() => handelAddToCart(item.idProduct)}
        >
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};
export default CProduct;
