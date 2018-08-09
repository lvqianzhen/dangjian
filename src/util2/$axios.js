import Vue from 'vue'
import axios from 'axios'
import allApi from './allApi'

let basePath = process.env.NODE_ENV == 'development'?'/api':'/'
var xhr = axios.create({
  baseURL: basePath,
  timeout: 5000
})
var $axios = {
  get(url,params){
    return new Promise((resolve,reject)=>{
      xhr.get(allApi[url],{params,headers:{"token":localStorage.getItem('token')}}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  post(url,params){
    return new Promise((resolve,reject)=>{
      xhr.post(allApi[url],params,{headers:{"token":localStorage.getItem('token')}}).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  },
  qiniuGet(){
    return new Promise((resolve,reject)=>{
      xhr.get(allApi[url],params).then(res=>{
        resolve(res.data)
      }).catch(err=>{
        reject(err)
      })
    })
  }
}

Vue.prototype.$axios = $axios
