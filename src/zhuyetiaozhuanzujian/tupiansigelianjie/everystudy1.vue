<!--<template>-->
  <!--<div class="header13">-->
    <!--<tiaozhuanheader>随时随地学</tiaozhuanheader>-->
    <!--<div class="kong"></div>-->
    <!--<h3>人民日报——紧紧抓住大有可为的历史机遇期</h3>-->
    <!--<p>习近平总书记1月5日在学习贯彻党的十九大精神研讨班开班式上发表重要讲话，鲜明指出，当前，我国正处于一个大有可为的历史机遇期。这是习近平总书记纵观过去、当下与未来的历史演进，通览国家、政党、民族的沉浮兴衰，作出的重大战略判断，是中国特色社会主义进入新时代的国家表达、民族表达，彰显着当代中国共产党人洞察历史的睿智、创造历史的担当。</p>-->
    <!--<p>（一）</p>-->
    <!--<p>历史的发展，总有一些关键的节点、关键的时期。</p>-->
    <!--<p>2017年10月，历史会记下这个金秋。一个拥有8900多万党员的世界最大政党，一个在世界最大发展中国家久经考验、成熟执政的马克思主义政党——中国共产党，在世界瞩目下展开了中华民族新时代的华章。</p>-->
  <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import tiaozhuanheader from '../../base/tiaozhuanheader.vue'-->
  <!--export default {-->
    <!--name: "everystudy1",-->
    <!--components:{-->
      <!--tiaozhuanheader-->
    <!--}-->
  <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.header13{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.kong{-->
    <!--width: 100%;-->
    <!--height: 50px;-->
  <!--}-->
  <!--h3{-->
    <!--font-size: 22px;-->
    <!--color: #585858;-->
    <!--padding: 10px;-->
  <!--}-->
  <!--p{-->
    <!--font-size: 14px;-->
    <!--color: #676767;-->
    <!--padding: 10px;-->
  <!--}-->
<!--</style>-->
<!--<style scoped>-->

<!--</style>-->


<template>
  <div class="header13">
    <tiaozhuanheader>随时随地学</tiaozhuanheader>
    <div class="kong"></div>
    <h3 v-text="everystudya.title"></h3>
    <p v-html="everystudya.content"></p>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
  export default {
    name: "everystudy1",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        everystudya:[]
      }
    },
    methods:{
      everystudyb(){
        this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
          // console.log(res.data)
          this.everystudya=res.data.data
        })
      }
    },
    created(){
      this.everystudyb()
    }

  }
</script>
<style>
  .header13{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  h3{
    font-size: 22px;
    color: #585858;
    padding: 10px;
  }
  p{
    font-size: 14px;
    color: #676767;
    padding: 10px;
  }
  .header13 img{
    width: 100%;
    /*height: 350px;*/
  }
</style>
<style scoped>

</style>
