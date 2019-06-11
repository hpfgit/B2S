import axios from 'axios'
import store from '../store'

import {getToken} from '../utils/auth'

const service = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['X-Token'] = getToken()
//     }
//     return config
//   },
//   error => {
//     console.log(error)
//     return Promise.reject(error)
//   }
// )

service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.status === 200) {
      alert(res.message)
      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        alert(res.message)
        store.dispatch('user/resetToken').then(() => {
          location.reload()
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    alert('err' + error) // for debug
    return Promise.reject(error)
  }
)

export default service