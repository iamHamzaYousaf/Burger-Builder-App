import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-app-435f6.firebaseio.com/'
});

export default instance;