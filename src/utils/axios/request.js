import axios from 'axios'

const reqAxios = axios.create({
//   baseURL: 'http://localhost:3000'
  baseURL: 'https://netease-cloud-music-api-pink-pi.vercel.app/'
})

export default reqAxios
