import axios from 'axios'
//auth,/blog
const api = axios.create({
    baseURL: "http://localhost:8888/api/v1",
    withCredentials:true
})

export default api