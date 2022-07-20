import axios from 'axios'

const reqAxios = axios.create({
  baseURL: 'http://localhost:3000'
})

export default reqAxios
