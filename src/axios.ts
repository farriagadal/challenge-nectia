import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000/api'
})

instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => response.data.data,
  (error) => Promise.reject(error)
)

export default instance