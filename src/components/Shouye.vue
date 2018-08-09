<template>
  <div class="content">
    <div class="header">
      <img src="../img/logo.png" alt="">
      <router-link to="/login" v-show="aaa == undefined">登录</router-link>
    </div>
    <Tab></Tab>
    <div class="kong"></div>
    <div class="content_box">
      <!--//轮播图开始-->
      <div class="slider">
        <mt-swipe :auto="4000"  style="position: relative">
          <mt-swipe-item v-for="item in lunbotu" :key='item._id'>
            <img :src="item.img" alt="">
            <p v-html="item.title"></p>
          </mt-swipe-item>
          <!--<mt-swipe-item>-->
            <!--<img src="../img/2.jpg" alt="">-->
          <!--</mt-swipe-item>-->
          <!--<mt-swipe-item>-->
            <!--<img src="../img/3.jpg" alt="">-->
          <!--</mt-swipe-item>-->
          <!--<mt-swipe-item>-->
            <!--<img src="../img/2.jpg" alt="">-->
          <!--</mt-swipe-item>-->
          <!--<mt-swipe-item>-->
            <!--<img src="../img/3.jpg" alt="">-->
          <!--</mt-swipe-item>-->
        </mt-swipe>
      </div>
      <!--//轮播图结束-->
      <!--列表开始-->
      <div class="tu">
        <ul>
          <li>
            <router-link to="/news" class="hezi" >
             <img src="../img/icon_01.png">
              <p>信工新闻眼</p>
            </router-link>
          </li>
          <li>
            <router-link to="/life" class="hezi">
              <img src="../img/icon_03.png">
              <p>掌上组织生活</p>
            </router-link>
          </li>
          <li>
            <router-link to="/exchange" class="hezi">
              <img src="../img/icon_05.png">
              <p>党员云互动</p>
            </router-link>
          </li>
          <li>
            <router-link to="/yidiantong" class="hezi">
              <img src="../img/icon_04.png">
              <p>党建一点通</p>
            </router-link>
          </li>
          <li>
            <router-link to="/liangshenfen" class="hezi">
              <img src="../img/icon_06.png">
              <p>党员亮身份</p>
            </router-link>
          </li>
          <li>
            <router-link to="/history" class="hezi">
              <img src="../img/icon_02.png">
              <p>党史上的今天</p>
            </router-link>
          </li>
        </ul>
      </div>
      <!--列表结束-->
      <!--底部第二部分开始-->
      <div class="yongbao">
        <img src="../img/banner02.png" alt="">
      </div>
      <!--底部第二部分结束-->
      <!--主页尾开始-->
      <div class="mo_box">
        <div class="mo_left"></div>
        <div class="mo_box2">
          <div class="mo_box2_shang">
            <router-link class="mo_box2_shang_zuo" to="/lianjieone"></router-link>
            <router-link class="mo_box2_shang_you" to="/lianjietwo"></router-link>
          </div>
          <div class="mo_box2_xia">
            <router-link class="mo_box2_xia_zuo" to="/lianjiethree"></router-link>
            <router-link class="mo_box2_xia_you" to="/lianjiefore"></router-link>
          </div>
        </div>
      </div>
      <!--主页尾结束-->
    </div>
  </div>
</template>

<script>
  import Tab from '../base/Tab.vue'
    export default {
      name: "Shouye",
      components:{
        Tab
      },
      data(){
        return{
          lunbotu:[],
          aaa:''
        }
      },
      methods:{
        isLogin(){
          this.aaa = localStorage.getItem('token')
          // console.log(this.aaa)
        },
        getslider(){
          // console.log(window.cookie)
          this.$axios.get("getSlider").then(res=>{
            // console.log(res.data)
            this.lunbotu=res.data.data;
          })
        }
      },
      created(){
        this.getslider();
        this.isLogin()
      }
    }
</script>
<style>
  .content{
    width: 100%;
  }
  /*header开始*/
  .content .header{
    z-index: 1;
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #c50206;
    align-items: center;
  }
  .content .header img{
    width: 120px;
    height: 30px;
    margin-left: 10px;
    color: white;
  }
  .content .header a{
    position: fixed;
    font-size: 18px;
    right: 10px;
    color: #fff;
    font-weight: 400;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  /*header结束*/
  .content .content_box{
    width: 100%;
  }
  /*轮播图开始*/
  .content .content_box .slider{
    width: 100%;
    height: 187.5px;
    /*padding-top: 50px;*/
  }
  .content .content_box .slider img{
    width: 100%;
    height: 187.5px;
  }
  .content .content_box .slider p{
    width: 100%;
    height: 25px;
    line-height: 25px;
    /*background-color: #cccccc;*/
    font-size: 12px;
    color: #fafafa;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: rgba(100,100,100,0.5);
    padding-left: 5px;
  }
  /*轮播图结束*/
  /*列表开始*/
  .content .content_box .tu{
    background: url("../img/bt_bg.png");
    width: 100%;
    height: 218px;
    background-size: 100% 100%;
    margin: 0 auto;
  }
  .content .content_box ul{
    display: flex;
    flex-wrap: wrap;
    /*padding: 5px;*/
    margin: 0 auto;
    text-align: center;
    align-items: center;
    padding-top: 15px;
  }
  .content .content_box li{
    width: 30%;
    text-align: center;
    line-height: 25px;
    margin: 4px;
    padding: 2px;
  }
  .content .content_box li p{
    font-size: 16px;
    color: #b0b0b0;
  }
  .content .content_box .tu img{
    width:50px;
    height: 50px;
  }
  /*列表结束*/
  /*图片开始*/
  .content .content_box .yongbao{
    width: 100%;
    height: 110px;
  }
  .content .content_box .yongbao img{
    width: 100%;
    height: 110px;
    display: block;
  }
  /*图片结束*/
  /*主页尾开始*/
  .content .content_box .mo_box{
    background-image: url("../img/tese.png");
    background-size: 100%;
    width: 100%;
    height: 164.8px;
    display: flex;
    padding-bottom: 60px;
  }
  .content .content_box .mo_left {
    flex: 1;
  }
  .content .content_box .mo_box2{
    flex: 2;
  }
  .content .content_box .mo_box2 .mo_box2_shang{
    width: 100%;
    height: 50%;
    display: flex;
  }
  .content .content_box .mo_box2 .mo_box2_shang .mo_box2_shang_zuo{
    flex: 1;
  }
  .content .content_box .mo_box2 .mo_box2_shang .mo_box2_shang_you{
    flex: 1;
  }
  .content .content_box .mo_box2 .mo_box2_xia{
    width: 100%;
    height: 50%;
    display: flex;
  }
  .content .content_box .mo_box2 .mo_box2_xia .mo_box2_xia_zuo{
    flex: 1;
  }
  .content .content_box .mo_box2 .mo_box2_xia .mo_box2_xia_you{
    flex: 1;
  }
  /*主页尾结束*/
</style>

<style scoped>
  *{
    padding: 0;
    margin: 0;
  }
  ul,li{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }

</style>
