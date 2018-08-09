<template>
  <div class="canping">
    <tiaozhuanheader>参评党员</tiaozhuanheader>
    <div class="kong"></div>
    <div class="canpingxia_box" v-for="(item,index) in huoqushuju" :key="item.index">
      <div class="img_box">
        <img :src="item.avatar" alt="">
      </div>
      <div class="xingming">
        <p v-text="item.userName"></p>
      </div>
      <div class="zhiwei">
        <p v-text="item.branchName"></p>
      </div>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../../base/tiaozhuanheader.vue'
    export default {
        name: "canpingdangyuan",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            huoqushuju:[],
          }
      },
      methods:{
        yonghu(){
             this.$axios.get("huoqupingyi",{branchId:this.$route.query.id}).then((res)=>{
             console.log(res.data)
             this.huoqushuju=res.data.data
           })
        }
      },
      created(){
          // this.huoqu(),
          this.yonghu()
      }
    }
</script>

<style scoped>
  .canping{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .canping .canpingxia_box{
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid skyblue;
    margin: 0 auto;
  }
  .canping .canpingxia_box .img_box{
    width: 55px;
    height: 55px;
    padding-left: 5px;
    padding-right: 5px;
    text-align: center;
  }
  .canping .canpingxia_box img{
    width: 50px;
    height: 50px;
    border-radius: 30px;
  }
  .canping .xingming{
    height: 30px;
    margin: 0 auto;
  }
  .canping .xingming p{
    line-height: 30px;
    font-size: 14px;
    color: #000;

  }
  .canping .zhiwei{
    height: 30px;
    margin: 0 auto;
  }
  .canping .zhiwei p{
    line-height: 30px;
    font-size: 14px;
    color: #000;
    padding-left: 10px;
  }
</style>


