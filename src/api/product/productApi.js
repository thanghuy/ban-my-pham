import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const ProductApi ={
    getProduct : (params) =>{
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}`;
        return axiosClient.get(url, {params});
    },
    getDetail : (id) =>{
        const url = "/products/"+id;
        return axiosClient.get(url);
    }
}
export default ProductApi;