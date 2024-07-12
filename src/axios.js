import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api', // This should match your backend server URL
});

export default instance;
