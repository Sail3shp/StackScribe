import axios from 'axios'
//auth,/blog
const BASE_URL = import.meta.env.MODE === 'development' ? 'http://localhost:8888/api/v1' : '/api/v1'
const api = axios.create({
    baseURL: BASE_URL,
    withCredentials:true
})

export default api