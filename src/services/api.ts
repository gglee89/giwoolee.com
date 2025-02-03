import axios from 'axios'

const api = axios.create({
    baseURL: `https://hacker-news.firebaseio.com`,
})

export default api
