import React, { useEffect } from "react";
import ProductApi from "../../api/product/productApi";
import CButton from "../../components/CButton";
import CCarousel from "../../components/CCarousel/CCarousel";
import CProduct from "../../components/CProduct/CProduct";
import useWindowSize from "../../hooks/useWindowSize";
import CategoryApi from "../../api/category/categoryApi";

const HomeModule = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  const size = useWindowSize();
  useEffect(() => {
    const fetchProduct = async () => {
      try {
<<<<<<< Updated upstream
        const res = await ProductApi.getNewProductByAmount(1);
=======
        const filter = {
          id: 1,
          name: "2"
        }
        // const res = await ProductApi.getProduct(filter);\
        //   const res = await  CategoryApi.getCategory({context: "view"})
        // const res = await ProductApi.getNewProductByAmount( {
        //     context:"view",
        //     per_page: 10,
        //     order: "desc",
        //     orderby: "date"
        // })
        //   let res = await ProductApi.getProductById(16,{context: "view"});
          
        console.log(res)
      } catch (error) {
      }
    }
    fetchProduct();
  }, [])
  return (
    <div className="xl:px-20 lg:px-20 md:px-2 sm:px-2 py-2">
      <div className="grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 gap-2">
        <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-1">
          <CCarousel>
            <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
            <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />

            <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />

            <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
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
      <div className="customer-height-div cw-full grid grid-cols-3 gap-2 mt-3">
        <div className="col-span-1 shadow-lg bg-white rounded-lg" style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0031/5870/4239/files/banner-01_56fd5f0e-a963-4aee-8bc3-c219b4382ece_635x250.jpg?v=1615876552)" }}></div>
        <div className="col-span-1 shadow-lg bg-white rounded-lg" style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0031/5870/4239/files/banner-02_ad5901b5-e44b-4213-a0d3-3ef84fdbbc53_635x250.jpg?v=1615876577)" }}></div>
        <div className="col-span-1 shadow-lg bg-white rounded-lg" style={{ backgroundImage: "url(https://cdn.shopify.com/s/files/1/0031/5870/4239/files/banner-02_ad5901b5-e44b-4213-a0d3-3ef84fdbbc53_635x250.jpg?v=1615876577)" }}></div>
      </div>
      <div
        className="w-full flex mb-5 mt-5 justify-start items-center"
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
        className="w-full flex mb-5 mt-5 justify-start items-center"
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
