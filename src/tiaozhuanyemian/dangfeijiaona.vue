<template>
  <div class="jiao_box">
    <tiaozhuanheader>党费缴纳</tiaozhuanheader>
    <div class="zhifu">
      <p>请选择支付方式</p>
    </div>
    <router-link to="/weixinma">
      <div class="yi_box">
        <div class="left_box">
          <img src="../img/weixin.png" alt="">
          <p>微信</p>
        </div>
        <div>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </router-link>
    <router-link to="/zhifubaoma">
      <div class="yi_box">
        <div class="left_box">
          <img src="../img/zhifubao.png" alt="">
          <p>支付宝</p>
        </div>
        <div>
          <i class="iconfont icon-jiantou"></i>
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
    export default {
        name: "dangfeijiaona",
         components:{
           tiaozhuanheader
         }
    }
</script>
<style>
  .jiao_box{
    width: 100%;
  }
  .jiao_box .zhifu{
    margin-top: 65px;
    width: 100%;
    height: 20px;
    font-size: 16px;
    color: #000;
    font-weight: bold;
    border-bottom: 1px solid skyblue;
    padding-bottom: 10px;
  }
  .jiao_box .yi_box{
    width: 100%;
    height: 40px;
    margin-top: 10px;
    border-bottom: 1px solid skyblue;
    padding-bottom: 10px;
    /*display: flex;*/
  }
  .jiao_box .yi_box .left_box{
    width: 200px;
    height: 40px;
    display: flex;
    position: absolute;
    left: 10px;
  }
  .jiao_box .yi_box i{
    position: absolute;
    right: 10px;
    font-size: 30px;
    line-height: 40px;
    color: #999999;
  }
  .jiao_box .yi_box .left_box img{
    width: 40px;
    height: 40px;
  }
  .jiao_box .yi_box .left_box p{
    font-size: 16px;
    color:#000 ;
    font-weight: bold;
    line-height: 40px;
    padding-left: 20px;
  }
</style>
<style scoped>

</style>
