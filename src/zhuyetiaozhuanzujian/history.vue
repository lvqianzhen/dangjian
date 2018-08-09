<!--<template>-->
    <!--<div class="header8">-->
      <!--<tiaozhuanheader>党史上的今天</tiaozhuanheader>-->
      <!--<div class="kong"></div>-->
      <!--<div class="boxa">-->
        <!--<h1>党史上的今天</h1>-->
      <!--</div>-->
      <!--<div class="box0">-->
        <!--<div class="boxb">-->
          <!--<h2>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行</h2>-->
        <!--</div>-->
        <!--<div class="boxc">-->
          <!--<p>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行，推举毛泽东为全国政协名誉主席，选举周恩来为主席，彭真、李济深等14人为副主席。</p>-->
        <!--</div>-->
      <!--</div>-->
      <!--<div class="box0">-->
        <!--<div class="boxb">-->
          <!--<h2>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行</h2>-->
        <!--</div>-->
        <!--<div class="boxc">-->
          <!--<p>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行，推举毛泽东为全国政协名誉主席，选举周恩来为主席，彭真、李济深等14人为副主席。</p>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
<!--</template>-->

<!--<script>-->
  <!--import tiaozhuanheader from '../base/tiaozhuanheader.vue'-->
    <!--export default {-->
        <!--name: "history",-->
       <!--components:{-->
         <!--tiaozhuanheader-->
       <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->
  <!--.header8{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.kong{-->
    <!--width: 100%;-->
    <!--height: 50px;-->
  <!--}-->
  <!--.box0{-->
    <!--width: 100%;-->
  <!--}-->
  <!--.boxa{-->
    <!--width: 100%;-->
    <!--height: 30px;-->

  <!--}-->
  <!--.boxa h1{-->
    <!--font-size: 24px;-->
    <!--color: #2f2f2f;-->
    <!--padding-left: 10px;-->
    <!--padding-top: 10px;-->
  <!--}-->
  <!--.boxb{-->
    <!--margin-top: 15px;-->
      <!--width: 100%;-->
      <!--height: 30px;-->
    <!--}-->
  <!--.boxb h2{-->
    <!--font-size: 18px;-->
    <!--color: #828282;-->
    <!--padding-left: 10px;-->
    <!--padding-top: 10px;-->
    <!--padding-right: 10px;-->
  <!--}-->
  <!--.boxc{-->
    <!--margin-top: 30px;-->
    <!--padding-top: 10px;-->
    <!--width: 100%;-->
  <!--}-->
  <!--.boxc p{-->
    <!--font-size: 14px;-->
    <!--color: #2f2f2f;-->
    <!--padding-left: 10px;-->
    <!--line-height: 25px;-->
    <!--padding-right: 10px;-->
  <!--}-->
<!--</style>-->
<!--<style scoped>-->

<!--</style>-->


<template>
  <div class="header8">
    <tiaozhuanheader>党史上的今天</tiaozhuanheader>
    <div class="kong"></div>
    <div class="boxa">
      <p v-html="hostory"></p>
    </div>
    <!--<div class="box0">-->
      <!--<div class="boxb">-->
        <!--<h2>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行</h2>-->
      <!--</div>-->
      <!--<div class="boxc">-->
        <!--<p>1959年4月17日至29日&nbsp;&nbsp;全国政协三届一次会议在北京举行，推举毛泽东为全国政协名誉主席，选举周恩来为主席，彭真、李济深等14人为副主席。</p>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
  export default {
    name: "history",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        hostory:''
      }
    },
    methods:{
      hostorya(){
        this.$axios.get("historynews").then((res)=>{
          // console.log(res.data)
          this.hostory=res.data.data
        })
      }
    },
    created(){
      this.hostorya()
    }
  }
</script>
<style>
  .header8{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .boxa{
    width: 100%;
    height: 30px;

  }
  .boxa p{
    font-size: 24px;
    color: #2f2f2f;
    padding-left: 10px;
    padding-top: 10px;
  }
  .boxb h2{
    font-size: 18px;
    color: #828282;
    padding-left: 10px;
    padding-top: 10px;
    padding-right: 10px;
  }
  .boxc p{
    font-size: 14px;
    color: #2f2f2f;
    padding-left: 10px;
    line-height: 25px;
    padding-right: 10px;
  }
</style>
<style scoped>

</style>
