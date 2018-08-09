<template>
  <div class="hezi2">
    <tiaozhuanheader>积分明细</tiaozhuanheader>
    <div class="kong"></div>
    <div class="hezi2_xiaohe" v-for="item in jifenxinxi" :key="item._id">
      <div class="hezi2_xiaohe_left">
        <p v-text="item.scoreName"></p>
        <span  v-text="item.createTime"></span>
        <!--<span>2018-04-25&nbsp;18:42:36</span>-->
      </div>
      <div class="hezi2_xiaohe_right">+{{item.score}}</div>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
    export default {
        name: "jifenmingxi",
        components:{
          tiaozhuanheader
        },
      data(){
        return{
          jifenxinxi:[]
        }
      },
      methods:{
          huoqujifenxinxi(){
            this.$axios.get("jifen").then((res)=>{
              this.jifenxinxi=res.data.data
              // console.log(res.data.data)
            })
          }
      },
      created(){
          this.huoqujifenxinxi()
      }
    }
</script>

<style scoped>
  .hezi2{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .hezi2 .hezi2_xiaohe{
    width: 100%;
    display: flex;
    height: 70px;
    align-items: center;
    border-bottom: 1px solid skyblue;
  }
  .hezi2 .hezi2_xiaohe .hezi2_xiaohe_left{
       width: 300px;
       height: 50px;
       padding-left: 15px;
  }
  .hezi2 .hezi2_xiaohe .hezi2_xiaohe_left p{
    font-size: 18px;
    color: #5a5a5a;
    padding-bottom: 5px;
  }
  .hezi2 .hezi2_xiaohe .hezi2_xiaohe_left span{
    font-size: 18px;
    color: #5a5a5a;
  }
  .hezi2 .hezi2_xiaohe .hezi2_xiaohe_right{
    font-size: 18px;
    color: red;
    position: absolute;
    right: 10px;
  }
</style>
