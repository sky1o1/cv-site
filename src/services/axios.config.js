import axios from 'axios';

const api = axios.create({
    baseURL: `http://127.0.0.1:8000/`,
    headers: {
        Accept: 'application/json',
    }
})

const getAuthToken = () => {
    return localStorage.getItem('access_token')
}

export const getRequest = (url, headers = true) => {
    let authorization_token = ''
    if(headers){
        authorization_token = {authorization: getAuthToken()}
    }
    return api.get(url)
}

export const postRequest = (url, data, headers = true) => { 
    let authorization_token = ''
    if(headers){
        authorization_token = {authorization: getAuthToken()}
    }
    return api.post(url, data)
}  

export const putRequest = (url, data, headers = true) => {
    let authorization_token = ''
    if(headers){
        authorization_token = {authorization: getAuthToken()}
    }
    return api.put(url, data)
}

export const patchRequest = (url, data, headers = true) => {
    let authorization_token = ''
    if(headers){
        authorization_token = {authorization: getAuthToken()}
    }
    return api.patch(url, data)
}

export const deleteRequest = (url, headers = true) => {
    let authorization_token = ''
    if(headers){
        authorization_token = {authorization: getAuthToken()}
    }
    return api.delete(url)
}
