<template>
  <div class="header20">
    <tiaozhuanheader>特色活动</tiaozhuanheader>
    <div class="kong"></div>
    <h3>{{forww.title}}</h3>
    <!--<p>{{forww.title}}</p>-->
    <p v-html="forww.content"></p>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
  export default {
    name: "everystudy4",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        forww:""
      }
    },
    methods:{
      foreoo(){
        this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
          console.log(res.data)
          this.forww=res.data.data
        })
      }
    },
    created(){
      this.foreoo()
    }
  }
</script>
<style>
  .header20{
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
  .header20 .yy{
    width: 100%;
    height: 200px;
  }
  img{
    width: 355.2px;
    height: 200px;
    padding: 10px;
  }
</style>
<style scoped>

</style>
