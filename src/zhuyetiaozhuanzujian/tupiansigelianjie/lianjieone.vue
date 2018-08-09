<!--<template>-->
  <!--<div class="header12">-->
    <!--<div>-->
      <!--<tiaozhuanheader>政治学习</tiaozhuanheader>-->
    <!--</div>-->
    <!--<div class="kong"></div>-->
    <!--<router-link to="/everystudy1">-->
      <!--&lt;!&ndash;<div class="news_box" v-for="item in Newsone" :key="item.type">&ndash;&gt;-->
      <!--<div class="news_box">-->
        <!--<div class="img_box">-->
          <!--<img src="../../img/dangbiao.png" alt="">-->
          <!--&lt;!&ndash;<img :src="item.img" alt="">&ndash;&gt;-->
        <!--</div>-->
        <!--<div class="right_box">-->
          <!--<div class="top">-->
            <!--<h3>河南日报：黄淮学院“党建e家”助力基层党建工作</h3>-->
            <!--&lt;!&ndash;<h3 v-text="item.title"></h3>&ndash;&gt;-->
          <!--</div>-->
          <!--<div class="xia">-->
            <!--&lt;!&ndash;<div class="xia_zuo" v-html="item.updateTime"></div>&ndash;&gt;-->
            <!--<div class="xia_zuo">2018-04-1 11:08:52</div>-->
            <!--<div class="xia_you">-->
              <!--<i class="iconfont icon-yanjing"></i>-->
              <!--<span class="you_right" >226</span>-->
              <!--&lt;!&ndash;<span class="you_right" v-html="item.title"></span>&ndash;&gt;-->
            <!--</div>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</router-link>-->
  <!--</div>-->
<!--</template>-->
<!--<script>-->
  <!--import tiaozhuanheader from '../../base/tiaozhuanheader.vue'-->
    <!--export default {-->
        <!--name: "lianjieone",-->
      <!--components:{-->
        <!--tiaozhuanheader-->
      <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.header12{-->
    <!--width: 100%;-->

  <!--}-->
  <!--.kong{-->
    <!--width: 100%;-->
    <!--height: 50px;-->
  <!--}-->
  <!--.news_box{-->
    <!--width: 100%;-->
    <!--display: flex;-->
    <!--border-bottom: 1px solid skyblue;-->
  <!--}-->
  <!--.news_box .img_box{-->
    <!--width: 100px;-->
    <!--height:100px;-->

  <!--}-->
  <!--.news_box .img_box img{-->
    <!--width: 80px;-->
    <!--height: 80px;-->
    <!--padding: 10px;-->
  <!--}-->
  <!--.news_box .right_box{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.news_box .right_box .top{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.news_box .right_box .top h3{-->
    <!--font-size: 16px;-->
    <!--color: #585858;-->
    <!--padding-top: 10px;-->
    <!--padding-right: 5px;-->
  <!--}-->
  <!--.news_box .right_box .xia{-->
    <!--width: 100%;-->
    <!--font-size: 10px;-->
    <!--color: #b3b3b3;-->
    <!--margin-top: 30px;-->
    <!--display: flex;-->
    <!--/*word-wrap: break-word;*/-->
  <!--}-->
  <!--.news_box .right_box .xia i{-->
    <!--padding-right: 5px;-->
  <!--}-->
  <!--.news_box .right_box .xia .xia_you{-->
    <!--position: absolute;-->
    <!--right: 0;-->
  <!--}-->
  <!--.news_box .right_box .xia .xia_you .you_right{-->
    <!--padding-right: 10px;-->
  <!--}-->
  <!--.news_box .right_box .xia .xia_zuo{-->
    <!--width: 80%;-->

  <!--}-->
<!--</style>-->
<!--<style scoped>-->

<!--</style>-->




<template>
  <div class="header12">
    <div>
      <tiaozhuanheader>政治学习</tiaozhuanheader>
    </div>
    <div class="kong"></div>
    <div v-for="item in lianjieonea" :key="item._id">
      <router-link :to="'/everystudy1?id='+item._id">
        <div class="news_box">
          <div class="img_box">
            <img :src="item.img" alt="">
          </div>
          <div class="right_box">
            <div class="top">
              <h3 v-html="item.title"></h3>
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
    name: "lianjieone",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        lianjieonea:[]
      }
    },
    methods:{
      lianjieoneaa(){
        this.$axios.get("Liebiao",{type:"6"}).then((res)=>{
          // console.log(res.data)
          this.lianjieonea=res.data.data
        })
      }
    },
    created(){
      this.lianjieoneaa()
    }
  }
</script>
<style>
  .header12{
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
