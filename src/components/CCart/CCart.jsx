const CCart = () => {
  return (
    <div className="mt-10 xl:px-20 lg:px-20 md:px-2 mb-10">
      <div className="flex bg-white shadow-md rounded-lg">
        <div className="w-3/4 px-5 py-5">
          <div className="flex justify-between border-b pb-5">
            <h1 className="font-semibold text-xl">Giỏ hàng</h1>
            <h2 className="font-semibold text-xl">3 Sản phẩm</h2>
          </div>
          <div className="flex mt-5 mb-1">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
              Tên
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Số lượng
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Giá
            </h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
              Tổng tiền
            </h3>
          </div>
          <div className="flex items-center hover:bg-gray-100 px-6 py-5">
            <div className="flex w-2/5">
              <div className="w-20">
                <img
                  className="h-24"
                  src="https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z"
                />
              </div>
              <div className="flex flex-col justify-between ml-4 flex-grow">
                <span className="font-bold text-sm">Trắng da ban đêm</span>
                <span className="text-red-500 text-xs">Kem dưỡng ẩm</span>
                <a
                  href="#"
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                >
                  Xoá
                </a>
              </div>
            </div>
            <div className="flex justify-center w-1/5">
              <input
                className="mx-2 border text-center w-8"
                type="number"
                defaultValue={5}
              />
            </div>
            <span className="text-center w-1/5 font-semibold text-sm text-red-600">
              1.000.000 VNĐ
            </span>
            <span className="text-center w-1/5 font-semibold text-sm text-red-600">
              5.000.000 VNĐ
            </span>
          </div>
          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            Tiếp tục mua hàng
          </a>
        </div>
        <div
          id="summary"
          className="w-1/4 px-5 py-5"
          style={{ borderLeft: "1px solid #d3d3d3" }}
        >
          <h1 className="font-semibold text-xl border-b pb-5">Đơn hàng</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm">Thành tiền</span>
            <span className="font-semibold text-sm text-red-600">
              5.000.000 VNĐ
            </span>
          </div>
          <div>
            <label className="font-medium inline-block mb-3 text-sm">
              Phí vận chuyển
            </label>
            <select className="block p-2 text-gray-600 w-full text-sm">
              <option>Miễn phí vận chuyển</option>
              <option>Miễn phí vận chuyển</option>
            </select>
          </div>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm">
              <span>Tổng tiền</span>
              <span className="font-semibold text-red-600">5.000.000 VNĐ</span>
            </div>
            <button
              className="font-semibold hover:bg-indigo-600 py-3 text-sm text-white w-full rounded-lg"
              style={{ backgroundColor: "#ff4949" }}
            >
              Đặt hàng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CCart;
