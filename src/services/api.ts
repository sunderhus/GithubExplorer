import axios from 'axios';

const app = axios.create({
    baseURL: 'https://api.github.com/',
})
export default app;
