import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const OrderApi ={
    getCategory : (params) =>{
        const url = `/${SYSTEM_API.CATEGORY.GET_CATERGORY}`;
        return axiosClient.get(url, {params});
    },
    createOrder(order) {
        const url = `/${SYSTEM_API.ORDER.CREATE_ORDER}`;
        return axiosClient.post(url, {params});
    }
}
export default OrderApi;
