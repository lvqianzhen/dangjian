import Vue from 'vue'
import myAxios from './base'
import mine from './base'
import allApi from './allApi'
import router from '.././router'
import { Toast } from 'mint-ui';
var xhr={
  get:function (url,params) {
    return new Promise((resolve, reject) =>{
      myAxios.get(allApi[url],{params}).then(res=>{
        if(!res.data.ret){
          Toast("你还未登录 请先登录")
          setTimeout(()=>{
            router.push({path:'/login'})
          },1000)
        }
        else {
          resolve(res)
        }
      }).catch((err=>{
        console.log(err)
        reject(err)
      }))
    }) 

  },
  post:function (url,data) {
    return mine.post(allApi[url],data)
  }
}

Vue.prototype.$axios=xhr;
