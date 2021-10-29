import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const CategoryApi ={
    getCategory : (params) =>{
        const url = `/${SYSTEM_API.CATEGORY.GET_CATERGORY}`;
        return axiosClient.get(url, {params});
    },
}
export default CategoryApi;
