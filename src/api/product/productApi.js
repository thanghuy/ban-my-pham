import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const ProductApi ={
    getProduct : (params) =>{
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}`;
        return axiosClient.get(url, {params});
    },
    getDetail : () =>{
        const url = `/${SYSTEM_API.CATEGORY.GET_CATERGORY}?`;
        return axiosClient.get(url, {context:"view"});
    },
    getNewProductByAmount(amount) {
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}?`;
        return axiosClient.get(url, {
            context:"view",
            per_page: amount,
            order: "desc",
            orderby: "date"
        });
    }
}
export default ProductApi;
