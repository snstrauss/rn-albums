import axios from 'axios';

const albumsApi = axios.create({
    baseURL: 'https://rallycoding.herokuapp.com/api/'
});

export default albumsApi;

