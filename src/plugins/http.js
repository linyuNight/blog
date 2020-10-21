import axios from 'axios'

const api = axios.create({
  // baseURL: '/api/'
  baseURL: 'http://127.0.0.1:3003/api/'
})
// 2.再创建一个axios实例，用来放第二个baseURL
const test = axios.create({
  baseURL: '/test/'
})

export default {
  api,
  test
}
