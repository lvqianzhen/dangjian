<template>
  <div class="zongde_box">
    <div class="tupian">
      <div class="weixinzhifu" @click="goback">
        微信支付
      </div>
      <div @click="goback">
        <img src="../img/wechat.png" alt="">
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "weixinma",
      methods:{
        goback(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style>
  .zongde_box{
    width: 100%;
    height: 665px;
    background: #999999;
    align-items: center;
  }
  .zongde_box .tupian{
    width: 260px;
    height: 260px;
    background: #fff;
    position: absolute;
    top: 190px;
    left: 55px;
  }
  .tupian .weixinzhifu{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    color: #000;
  }
  .tupian img{
    width: 200px;
    height: 200px;
    text-align: center;
    align-items: center;
    padding-left: 28px;
  }
</style>
<style scoped>

</style>
