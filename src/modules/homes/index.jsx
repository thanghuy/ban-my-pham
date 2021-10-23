import React from "react";
import CButton from "../../components/CButton";
import CCarousel from "../../components/CCarousel/CCarousel";
import CProduct from "../../components/CProduct/CProduct";
import useWindowSize from "../../hooks/useWindowSize";

const HomeModule = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const size = useWindowSize();
  return (
    <div className="xl:px-20 lg:px-20 md:px-2 sm:px-2 py-2">
      <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-2">
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-1">
          <CCarousel>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/faa27670584061.5bd3dcfabe723.png" />
            <img src="http://thegioidohoacom.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2018/12/12020604/thi%E1%BA%BFt-k%E1%BA%BF-banner-m%E1%BB%B9-ph%E1%BA%A9m-61.png" />

            <img src="https://topprint.vn/wp-content/uploads/2021/07/banner-my-pham-dep-12-1024x390.png" />

            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/1400/faa27670584061.5bd3dcfabe723.png" />
          </CCarousel>
        </div>
        {size > 600 ? (
          <div className="grid grid-rows-2 gap-y-2 xl:col-span-1 lg:col-span-2 md:col-span-2 sm:col-span-1">
            <div
              className="w-full shadow-lg bg-white rounded-lg"
              style={{
                backgroundImage: `url(https://cf.shopee.sg/file/fe3882b3515a1febc1d5986051a6e363)`,
              }}
            ></div>
            <div
              className="w-full shadow-lg bg-white rounded-lg"
              style={{
                backgroundImage: `url(https://cf.shopee.sg/file/da54494a10f8b950d85a906e78663a53)`,
              }}
            ></div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-x-2 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1">
            <div
              className="w-full shadow-lg bg-white rounded-lg"
              style={{
                backgroundImage: `url(https://cf.shopee.sg/file/fe3882b3515a1febc1d5986051a6e363)`,
                height: 150,
              }}
            ></div>
            <div
              className="w-full shadow-lg bg-white rounded-lg"
              style={{
                backgroundImage: `url(https://cf.shopee.sg/file/da54494a10f8b950d85a906e78663a53)`,
                height: 150,
              }}
            ></div>
          </div>
        )}
      </div>
      <div
        className="w-full flex mb-5 mt-5 justify-center items-center"
        style={{ height: 40 }}
      >
        <h2 className="sm:text-xl xl:text-2xl font-medium">Sản phẩm mới</h2>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {arr.map((item) => {
          return <CProduct className="col-span-1" key={item} />;
        })}
      </div>
      <div
        className="w-full flex mb-5 mt-5 justify-center items-center"
        style={{ height: 40 }}
      >
        <h2 className="sm:text-xl xl:text-2xl font-medium">Tất cả sản phẩm</h2>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
        {arr.map((item) => {
          return <CProduct className="col-span-1" key={item} />;
        })}
      </div>
      <div
        className="w-full flex mb-5 mt-5 justify-center items-center"
        style={{ height: 40 }}
      >
        <CButton>Xem thêm</CButton>
      </div>
    </div>
  );
};
export default HomeModule;
