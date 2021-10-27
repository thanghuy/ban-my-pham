import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const CategoryApi ={
    getCategory : () =>{
        const url = `/${SYSTEM_API.CATEGORY.GET_CATERGORY}?`;
        return axiosClient.get(url, {context:"view"});
    },
}
export default CategoryApi;
