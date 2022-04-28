import axios from 'axios';
const apiUrl = 'https://dummyapi.io/data/v1/post?limit=10';
const appId = '62668774bb42012ca0044bd0';

const ApiGet = async (http) => {
    let options = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'app-id': appId
        }
    };
    const request = await axios.get(apiUrl + http, options)
        .then(response => response)
        .catch(error => error.response.data);
    return request;
};


const ApiPost = async (http, payload) => {
    let options = {
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'app-id': appId
        }
    };
    const req = await axios.post(apiUrl + http, payload, options)
        .then(response => response)
        .catch(error => error.response.data);
    return req;
};

export default {
    ApiGet,
    ApiPost,
}