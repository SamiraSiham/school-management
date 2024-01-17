import axios from 'axios';

export default function Api(){
    const http = axios.create({
        baseURL:'http://localhost:8000/api',
        withCredentials:true,
        // headers:{
        //     // 'content-type': 'application/json'
        //     'content-type': 'multipart/form-data',
        //     'Access-Control-Allow-Origin': 'http://localhost:3000',
        // },
    });
    return {http}
}