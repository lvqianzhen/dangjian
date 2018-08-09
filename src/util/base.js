import axios from 'axios'
var instance = axios.create({
  baseURL:'http://192.168.1.150/api/',
  withCredentials: true
});
export default instance;
