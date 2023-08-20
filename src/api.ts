import axios from 'axios'
import Cookies from 'js-cookie'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

instance.interceptors.request.use((config) => {
  const token = Cookies.get('token')
  if (token) {
    config.headers.Authorization = token
  }
  return config
})

instance.interceptors.response.use(
  (response) => response.data.data,
  (error) => Promise.reject(error)
)

export default instance
