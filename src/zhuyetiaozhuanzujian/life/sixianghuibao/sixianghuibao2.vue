<template>
  <div class="sixianghuibao_box">
    <tiaozhuanheader>思想汇报</tiaozhuanheader>
    <div class="kong"></div>
    <div class="hezi_zhong">
      <img src="../../../img/reviewing.png" alt="">
      <p>正在审核中</p>
    </div>
    <router-link to="/life">
      <div class="hezi_xia">
        <input type="submit" class="input_kuang"  value="关闭">
      </div>
    </router-link>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../../base/tiaozhuanheader.vue'
    export default {
        name: "sixianghuibao2",
      components:{
        tiaozhuanheader
      }
    }
</script>
<style scoped>
  .sixianghuibao_box{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .sixianghuibao_box .hezi_zhong{
    width: 100%;
    height: 180px;
    text-align: center;
    margin: 50px 0 auto;
  }
  .sixianghuibao_box .hezi_zhong img{
    width: 90px;
    height: 90px;
  }
  .sixianghuibao_box .hezi_zhong p{
    font-size: 16px;
    color: #999999;
    padding-top: 10px;
  }
  .sixianghuibao_box .hezi_xia{
    width: 100%;
    height: 100px;
    margin: 50px 0 auto;
    text-align: center;
  }
  .sixianghuibao_box .hezi_xia .input_kuang{
    width: 260px;
    height: 50px;
    background: #c50206;
    border-radius: 15px;
    font-size: 16px;
    color: #fff;
    outline: none;
  }
</style>
