import axios from 'axios'
import Vue from 'vue'
import router from '../router/index'
import api from './api'
// 存放主域名
var xhr = axios.create({
  baseURL: '/api/',
  timeout: 60000,
});
// 定义一个对象
var $axios={
  get(url,params){
    return new Promise((resolve ,reject)=>{
      xhr.get(api[url],{ params,headers:{"token":localStorage.getItem('token')}}).then( res => {
        resolve(res)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject) => {
      xhr.post(api[url],params,{headers:{"token":localStorage.getItem('token')}}).then(res => {
        resolve(res)
      }).catch((err) => {
        console.log(err)
        reject(err)
      })
    })
  },
  qiniuGet(){
    return new Promise((resolve ,reject)=>{
      xhr.get(api[url],params).then(res=>{
        resolve(res)
      }).catch((err)=>{
        console.log(err)
        reject(err)
      })
    })
  }
}
Vue.prototype.$axios=$axios
