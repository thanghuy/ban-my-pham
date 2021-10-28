import { Pagination } from "@mui/material";
import CCarousel from "../../components/CCarousel/CCarousel";
import CProduct from "../../components/CProduct/CProduct";

const ProductModule = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="xl:px-20 lg:px-20 md:px-2 sm:px-2 py-2">
      <CCarousel>
        <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
        <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
        <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
        <img src="https://cdn.shopify.com/s/files/1/0031/5870/4239/files/slider-02_0a284dac-c050-4f9c-8d5c-74b564a0bcd3_1298x.jpg?v=1615876132" />
      </CCarousel>
      <div
        className="w-full gap-2 flex items-center px-2 shadow-lg bg-white mt-5 rounded-lg border-gray-300"
        style={{ height: 50 }}
      >
        <label>Lọc</label>
      </div>
      <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2 mt-5 mb-5">
        {arr.map((item) => {
          return (
            <CProduct
              className="col-span-1"
              key={item}
              item={{
                idProduct: 1,
                nameProduct:
                  "Sữa Rửa Mặt Cetaphil Dịu Nhẹ Không Xà Phòng 500ml Gentle Skin Cleanser",
              }}
            />
          );
        })}
        <div className="xl:col-span-5 lg:col-span-4 md:col-span-3 sm:col-span-2 flex items-center justify-center mt-5">
          <Pagination count={10} color="primary" />
        </div>
      </div>
    </div>
  );
};
export default ProductModule;
