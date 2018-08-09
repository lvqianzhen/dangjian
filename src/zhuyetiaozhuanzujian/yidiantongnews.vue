<template>
    <div class="header40">
      <tiaozhuanheader>党建一点通</tiaozhuanheader>
      <div class="kong"></div>
      <h3 v-html="yidiantongnewss.content"></h3>
      <p v-html="yidiantongnewss.title"></p>
      <p v-html="yidiantongnewss.title"></p>
    </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
    export default {
        name: "yidiantongnews",
       components:{
         tiaozhuanheader
       },
      data(){
          return{
            yidiantongnewss:[]
          }
      },
      methods:{
        yidiantongnewsa(){
          this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
            // console.log(res.data)
            this.yidiantongnewss=res.data.data
          })
        }
      },
      created(){
          this.yidiantongnewsa()
      }
    }
</script>
<style>
.header40{
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
.header40 img{
width: 100%;
height: 350px;
}
</style>
<style scoped>

</style>
