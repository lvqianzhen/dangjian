<template>
  <div class="header15">
    <tiaozhuanheader>制度建设</tiaozhuanheader>
    <div class="kong"></div>
    <h3>{{threeaaa.title}}</h3>
    <div v-html="threeaaa.content"></div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
  export default {
    name: "everystudy3",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        threeaaa:''
      }
    },
    methods:{
      threess(){
        this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
          console.log(res.data)
          this.threeaaa=res.data.data
        })
      }
    },
    created(){
      this.threess()
    }
  }
</script>
<style>
  .header15{
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
</style>
<style scoped>

</style>
