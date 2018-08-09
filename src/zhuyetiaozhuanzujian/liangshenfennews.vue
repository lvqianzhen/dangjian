<template>
  <div class="header41">
    <tiaozhuanheader>党员亮身份</tiaozhuanheader>
    <div class="kong"></div>
    <div>
      <h3 v-html="Newstwo.title"></h3>
      <p v-html="Newstwo.content"></p>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
  export default {
    name: "liangshenfennews",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        Newstwo:[]
      }
    },
    methods:{
      newstwo(){
        this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
          // console.log(res.data)
          this.Newstwo=res.data.data
        })
      }
    },
    created(){
      this.newstwo()
    },
  }
</script>
<style>
  .header41{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .header41 h3{
    font-size: 22px;
    color: #585858;
    padding: 10px;
  }
  .header41 p{
    font-size: 14px;
    color: #676767;
    padding: 10px;
    line-height: 2em;
  }
  .header41 img{
    width: 100%;
    height: 350px;
  }
</style>
<style scoped>

</style>
