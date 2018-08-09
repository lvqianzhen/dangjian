<template>
  <div class="header4">
    <div class="kong"></div>
    <div>
      <tiaozhuanheader>掌上组织生活</tiaozhuanheader>
    </div>
    <div class="tu1"></div>
    <div class="tu2">
      <ul>
        <li>
          <router-link to="/lifestudy" class="geti">
            <img src="../../img/icon1.png" alt="">
            <p>政治学习</p>
          </router-link>
        </li>
        <li>
          <router-link to="/sixianghuibao1" class="geti">
            <img src="../../img/icon2.png" alt="">
            <p>思想汇报</p>
          </router-link>
        </li>
        <li>
          <router-link to="aaa" class="geti">
            <img src="../../img/icon3.png" alt="">
            <p>心得总结</p>
          </router-link>
        </li>
        <li>
          <router-link to="/minzhupingyi" class="geti">
            <img src="../../img/icon4.png" alt="">
            <p>民主评议</p>
          </router-link>
        </li>
        <li>
          <router-link to="/Map" class="geti">
            <img src="../../img/icon5.png" alt="">
            <p>流动党员找组织</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
    export default {
        name: "life",
      components:{
        tiaozhuanheader
      }
    }
</script>
<style>
  .header4{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .tu1{
    background-image: url("../../img/timg.jpg");
    width: 100%;
   height: 185px;
    background-size: 100%;
    background-repeat: no-repeat;
  }
  /*功能栏开始*/
  .tu2{
    width: 100%;
    height: 100px;
  }
  ul{
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    margin-top: 20px;
  }
  li{
    width: 30%;
    padding: 4px;
    margin: 2px;
    line-height: 30px;
  }
  li img{
   height: 90px;
    width: 90px;
  }
  li p{
    font-size: 18px;
    color: #585858;
  }
</style>
<style scoped>

</style>




