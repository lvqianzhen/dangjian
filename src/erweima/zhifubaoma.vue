<template>
  <div class="zongde1_box">
    <div class="tupian1">
      <div class="zhifubao" @click="goback">
        支付宝支付
      </div>
      <div @click="goback">
        <img src="../img/alipay.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "zhifubaoma",
      methods:{
        goback(){
          this.$router.go(-1)
        }
      }
    }
</script>
<style>
  .zongde1_box{
    width: 100%;
    height: 665px;
    background: #999999;
    align-items: center;
  }
  .zongde1_box .tupian1{
    width: 260px;
    height: 260px;
    background: #fff;
    position: absolute;
    top: 190px;
    left: 55px;
  }
  .tupian1 .zhifubao{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 20px;
    color: #000;
  }
  .tupian1 img{
    width: 200px;
    height: 200px;
    text-align: center;
    align-items: center;
    padding-left: 28px;
  }
</style>
<style scoped>

</style>
