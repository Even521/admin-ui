import {post} from "../untils/request";

/**
 * 注册请求接口
 * @param data
 * @returns {Promise}
 */
export const register=(data)=>{
    return post('/user/register',data);
};
/**
 * 用户登陆接口
 * @param request
 * @returns {Promise}
 */
export const login=(request)=>{
    return post('/user/login',request);
}
