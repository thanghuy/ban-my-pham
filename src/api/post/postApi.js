import { SYSTEM_API } from '../../common/contants';
import axiosClient from '../http-client';

const PostApi ={
    getPost : (params) =>{
        const url = `/${SYSTEM_API.POST.GET_POST}`;
        return axiosClient.get(url, {params});
    },
    getPostById(id) {
        const url = `/${SYSTEM_API.POST.GET_POST}/${id}`;
        return axiosClient.get(url);
    }
}
export default PostApi;
