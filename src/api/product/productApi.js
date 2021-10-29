import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const ProductApi ={
    getAllProduct : () =>{
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}?`;
        return axiosClient.get(url, {context:"view"});
    },
    getNewProductByAmount(params) {
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}`;
        return axiosClient.get(url, {params});
    },
    getProductById(id, param) {
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}/${id}`;
        return axiosClient.get(url, {param});
    }
}
export default ProductApi;
