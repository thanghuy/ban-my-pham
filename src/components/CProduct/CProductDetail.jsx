import CCarouselDetail from "../CCarousel/CCarouselDetail";

const CProductDetail = () => {
  return (
    <main className="my-8">
      <div className="mx-auto xl:px-20 lg:px-20 md:px-20 sm:px-2">
        <div className="md:flex md:items-center bg-white shadow-md rounded-lg xl:py-2 sm:pb-3">
          <div className="w-full h-64 md:w-1/2 lg:h-96">
            <img
              className="h-full w-full rounded-md object-cover max-w-lg mx-auto"
              src="https://images.unsplash.com/photo-1578262825743-a4e402caab76?ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
              alt="Nike Air"
            />
          </div>
          <div className="w-full max-w-lg md:ml-8 md:mt-0 md:w-1/2 px-2">
            <h3 className="text-gray-700 uppercase text-lg">
              Sữa Rửa Mặt Cetaphil Dịu Nhẹ Không Xà Phòng 500ml Gentle Skin
              Cleanser
            </h3>
            <span className="mt-5 font-semibold text-xl text-red-600">
              5.000.000 VNĐ
            </span>
            <hr className="my-3" />
            <div className="mt-2">
              <label className="text-gray-700 text-sm" htmlFor="count">
                Số lượng:
              </label>
              <div className="flex items-center mt-1">
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  +
                </button>
                <span className="text-gray-700 text-lg mx-2">20</span>
                <button className="text-gray-500 focus:outline-none focus:text-gray-600">
                  -
                </button>
              </div>
            </div>
            <div className="flex items-center mt-6 gap-4">
              <button className="flex justify-center items-center px-6 py-3 border border-transparent rounded-lg text-base font-medium text-white bg-indigo-600 hover:bg-indigo-70">
                Mua Ngay
              </button>
              <button className="px-6 py-3 text-gray-600 border rounded-md hover:bg-gray-200 focus:outline-none">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto xl:px-20 sm:px-2"></div>
    </main>
  );
};
export default CProductDetail;
