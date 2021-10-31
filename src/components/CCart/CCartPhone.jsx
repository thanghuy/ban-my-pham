import { useDispatch, useSelector } from "react-redux";
import Utils from "../../common/utils";
import Link from "next/link"
import CartService from "../../services/cart.services";
import { setAddToCart } from "../../redux/controller/cart.slice";

const CCartPhone = () => {
  const { listCart, inforCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const handleDeleteAll = (idProduct) => {
    const res = CartService.handleDeleteToCart(listCart, idProduct.toString());
    dispatch(setAddToCart(res));
  };
  const handleUpdateCart = (amount, idProduct) => {
    const lst = CartService.handleUpdateCart(listCart, idProduct, amount);
    dispatch(setAddToCart(lst));
  }
  return (
    <div className="mx-2 mt-5 mb-5 bg-white shadow-md rounded-lg">
      <div className="flex-1 py-2 px-2">
        <div className="flex items-start justify-between">
          <h2
            className="text-lg font-medium text-gray-900"
            id="slide-over-title"
          >
            Giỏ hàng
          </h2>
        </div>
        <div className="mt-8">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {listCart.map((item, index) => {
                return (
                  <li className="py-6 flex" key={index}>
                    <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                      <img
                        src={item.image}
                        alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                        className="w-full h-full object-center object-cover"
                      />
                    </div>
                    <div className="ml-4 flex-1 flex flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>
                            <a href="#">{item.nameProduct}</a>
                          </h3>
                          <span className="ml-4 font-semibold text-sm text-red-600">
                            {Utils.formatNumber(item.total)}
                          </span>
                        </div>
                        <p className="mt-1 text-sm text-gray-500">
                          {item.brand}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end justify-between text-sm">
                        <div className="text-gray-500">
                          <input
                            className="mx-2 border text-center w-8"
                            type="number"
                            min={0}
                            defaultValue={item.amount}
                            onChange={(e) => handleUpdateCart(e.target.valueAsNumber, item.idProduct)}
                          />
                        </div>
                        <div className="flex">
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => handleDeleteAll(item.idProduct)}
                          >
                            Xoá
                          </button>
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Thành tiền</p>
          <span className="font-semibold text-sm text-red-600">
            {Utils.formatNumber(inforCart.total)}
          </span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Phí vận chuyển</p>
          <span className="font-semibold text-sm text-red-600">
            Miễn phí
          </span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Tổng tiền</p>
          <span className="font-semibold text-sm text-red-600">
            {Utils.formatNumber(inforCart.total)}
          </span>
        </div>
        <div className="mt-6">
          <button
            className="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            style={{ backgroundColor: "#ff4949" }}
          >
            Đặt hàng
          </button>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            hoặc{" "}
            <Link href="/">
              <button
                type="button"
                className="text-indigo-600 font-medium hover:text-indigo-500"
              >
                Tiếp tục mua hàng<span aria-hidden="true"> →</span>
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CCartPhone;
