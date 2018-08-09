<template>
  <div class="header16">
    <div>
      <tiaozhuanheader>特色活动</tiaozhuanheader>
    </div>
    <div class="kong"></div>
    <div v-for="item in foreaa" :key="item._id">
      <router-link :to="'/everystudy4?id='+item._id">
        <div class="news_box">
          <div class="img_box">
            <img :src="item.img" alt="">
          </div>
          <div class="right_box">
            <div class="top">
              <h3>{{item.title}}</h3>
            </div>
            <div class="xia">
              <div class="xia_zuo">{{item.createTime}}</div>
              <div class="xia_you">
                <i class="iconfont icon-yanjing"></i>
                <span class="you_right" >{{item.browse}}</span>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
    export default {
        name: "lianjiefore",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            foreaa:[]
          }
      },
      methods:{
          forexx(){
            this.$axios.get("Liebiao",{type:"9"}).then((res)=>{
              // console.log(res.data)
              this.foreaa=res.data.data
            })
          }
      },
      created(){
          this.forexx()
      }
    }
</script>
<style>
  .header16{
    width: 100%;

  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .news_box{
    width: 100%;
    display: flex;
    border-bottom: 1px solid skyblue;
  }
  .news_box .img_box{
    width: 100px;
    height:100px;

  }
  .news_box .img_box img{
    width: 80px;
    height: 80px;
    padding: 10px;
  }
  .news_box .right_box{
    width: 100%;
  }
  .news_box .right_box .top{
    width: 100%;
  }
  .news_box .right_box .top h3{
    font-size: 16px;
    color: #585858;
    padding-top: 10px;
    padding-right: 5px;
  }
  .news_box .right_box .xia{
    width: 100%;
    font-size: 10px;
    color: #b3b3b3;
    margin-top: 30px;
    display: flex;
    /*word-wrap: break-word;*/
  }
  .news_box .right_box .xia i{
    padding-right: 5px;
  }
  .news_box .right_box .xia .xia_you{
    position: absolute;
    right: 0;
  }
  .news_box .right_box .xia .xia_you .you_right{
    padding-right: 10px;
  }
  .news_box .right_box .xia .xia_zuo{
    width: 80%;

  }
</style>
<style scoped>

</style>
