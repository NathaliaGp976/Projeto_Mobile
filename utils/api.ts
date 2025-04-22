import axios from 'axios'

const api = axios.create({
    baseURL: "http:// 192.168.1.51:3000",
    timeout: 5000,
    headers: {'Content-Type' : 'application/json'}
})


