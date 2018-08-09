<template>
    <div class="tou_box">
      <slot></slot>
      <i class="iconfont icon-fanhui1" @click="goBack"></i>
    </div>
</template>

<script>
    export default {
        name: "tiaozhuanheader",
      methods:{
          goBack(){
            this.$router.go(-1)
          }
      }
    }
</script>
<style>
  .tou_box{
    z-index: 1;
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    line-height: 50px;
    text-align: center;
    background: #c50206;
    font-size: 18px;
    color: #fff;
    margin: 0 auto;
  }
  .tou_box i{
    position: absolute;
    left: 10px;
    font-size: 30px;
  }

</style>
<style scoped>

</style>
