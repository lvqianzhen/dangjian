<template>
  <div class="header30">
    <tiaozhuanheader>通知早知道</tiaozhuanheader>
    <div class="kong"></div>
    <h3>{{tongzhinews.title}}</h3>
    <h4>{{tongzhinews.title}}</h4>
    <div class="h4_box">
      <h4 v-html="tongzhinews.content"></h4>
    </div>
  </div>
</template>
<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
    export default {
        name: "inform_knows_one",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            tongzhinews:""
          }
      },
      methods:{
          tongzhinewsa(){
            this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
              // console.log(res.data)
              this.tongzhinews=res.data.data
            })
          }
      },
      created(){
          this.tongzhinewsa()
      }
    }
</script>
<style>
  .header30{
    width: 100%;
  }
  .header30 .kong{
    width: 100%;
    height: 50px;
  }
  .header30 h3{
    font-size: 24px;
    color: #000;
    font-weight: normal;
    padding: 10px;
  }
  .header30 .h4_box{
    width: 100%;
    margin-top: 20px;
  }
  .header30 h4{
    font-size: 18px;
    color: #000;
    font-weight: normal;
    padding: 10px 10px 0;
  }
</style>
<style scoped>

</style>
