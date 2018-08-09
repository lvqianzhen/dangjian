<template>
  <div class="header26">
    <tiaozhuanheader>随时随地拍</tiaozhuanheader>
    <div class="kong"></div>
    <h3>{{newsuuu.title}}</h3>
    <div class="yy">
      <img :src="newsuuu.img">
    </div>
    <p>{{newsuuu.title}}</p>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
  export default {
    name: "everystudy2",
    components:{
      tiaozhuanheader
    },
    data(){
      return{
        newsuuu:""
      }
    },
    methods:{
      newscc(){
        this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
          // console.log(res.data)
          this.newsuuu=res.data.data
        })
      }
    },
    created(){
      this.newscc()
    }
  }
</script>

<style scoped>
.header26{
  width: 100%;
}
.kong{
  width: 100%;
  height: 50px;
}
h3{
  font-size: 22px;
  color: #585858;
  padding: 10px 10px 0;
}
.header26 p{
  font-size: 14px;
  color: #676767;
  padding: 20px;
}
.header26 .yy{
  width: 100%;
  height: 350px;
}
img{
  width: 355.2px;
  height: 350px;
  padding: 10px;
}
</style>
