const CCartPhone = () => {
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
              <li className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
                    alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Throwback Hip Bag</a>
                      </h3>
                      <span className="ml-4 font-semibold text-sm text-red-600">
                        5.000.000 VNĐ
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Salmon</p>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500">Số lượng 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              <li className="py-6 flex">
                <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                  <img
                    src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg"
                    alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."
                    className="w-full h-full object-center object-cover"
                  />
                </div>
                <div className="ml-4 flex-1 flex flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href="#">Medium Stuff Satchel</a>
                      </h3>
                      <span className="text-center ml-4 font-semibold text-sm text-red-600">
                        5.000.000 VNĐ
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">Blue</p>
                  </div>
                  <div className="flex-1 flex items-end justify-between text-sm">
                    <p className="text-gray-500">Số lượng 1</p>
                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Xoá
                      </button>
                    </div>
                  </div>
                </div>
              </li>
              {/* More products... */}
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Thành tiền</p>
          <span className="font-semibold text-sm text-red-600">
            5.000.000 VNĐ
          </span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Phí vận chuyển</p>
          <span className="font-semibold text-sm text-red-600">
            5.000.000 VNĐ
          </span>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900">
          <p>Tổng tiền</p>
          <span className="font-semibold text-sm text-red-600">
            5.000.000 VNĐ
          </span>
        </div>
        <div className="mt-6">
          <a
            href="#"
            className="flex justify-center items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Đặt hàng
          </a>
        </div>
        <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
          <p>
            hoặc{" "}
            <button
              type="button"
              className="text-indigo-600 font-medium hover:text-indigo-500"
            >
              Tiếp tục mua hàng<span aria-hidden="true"> →</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};
export default CCartPhone;
