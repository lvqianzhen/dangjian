<template>
  <div class="header30">
    <div>
      <tiaozhuanheader>随时随地拍</tiaozhuanheader>
    </div>
    <div class="kong"></div>
    <div class="liebiaotu">
      <ul >
        <li v-for="item in mmm" :key="item._id">
          <router-link :to="'/everystudy2?id='+item._id">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
    export default {
        name: "lianjietwo",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            mmm:[]
          }
      },
      methods:{
        nnnnn(){
          this.$axios.get("Liebiao",{type:"7"}).then((res)=>{
            // console.log(res.data)
            this.mmm=res.data.data
          })
        }
      },
      created(){
          this.nnnnn()
      }
    }
</script>
<style scoped>
  .header30{
    width: 100%;
  }
  .kong{
    width:100%;
    height:50px;
  }
  .header30 .liebiaotu{
    width: 100%;
    height: 218px;
  }
  .header30 .liebiaotu ul{
    display: flex;
    flex-wrap: wrap;
    /*padding: 5px;*/
    margin: 0 auto;
    text-align: center;
    align-items: center;
    padding-top: 15px;

  }
  .header30 .liebiaotu li{
    width: 45%;
    text-align: center;
    line-height: 25px;
    margin: 4px;
    padding: 2px;
    overflow: hidden;
  }
  .header30 .liebiaotu li p{
    font-size: 16px;
    color: #b0b0b0;
  }
  .header30 .liebiaotu img {
    width: 140px;
    height: 130px;
  }
  </style>
