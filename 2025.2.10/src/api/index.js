import request from '../utils/request';

export const getCode = (data) => {
    return request.post('/get/code', data);
}

export const userAuthentication = (data) => {
    return request.post('/user/authentication', data);
}

export const login = (data) => {
    return request.post('/login', data)
}

export const authAdmin = (params) => {
    return request.get('/auth/admin', { params });
}

export const userGetmenu = () => {
    return request.get('/user/getmenu');
}

export const userSetmenu = (data) => {
    return request.post('/user/setmenu', data)
}

export const menuList = (params) => {
    return request.get('/menu/list', { params })
}

export const menuSelectlist = () => {
    return request.get('/menu/selectlist');
}

