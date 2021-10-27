import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const ProductApi ={
    getProduct : () =>{
        const url = `/${SYSTEM_API.PRODUCT.GET_PRODUCT}?`;
        return axiosClient.get(url, {context:"view"});
    },
    getDetail : () =>{
        const url = `/${SYSTEM_API.CATEGORY.GET_CATERGORY}?`;
        return axiosClient.get(url, {context:"view"});
    }
}
export default ProductApi;
