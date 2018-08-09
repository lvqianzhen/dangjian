<template>
  <div class="zong_box">
    <div class="header">
      <p>通知早知道</p>
    </div>
    <div class="kong"></div>
    <!--<Tab></Tab>-->
    <!--内容部分开始-->
    <div v-for="item in tongzhilist" :key="item._id">
      <router-link :to="'/inform_knows_one?id='+item._id">
        <div class="xia-box">
          <div class="tu_box">
              <i class="iconfont icon-yuyin"></i>
          </div>
          <div class="right">
            <h3>{{item.title}}</h3>
            <p>{{item.createTime}}</p>
          </div>
        </div>
      </router-link>
    </div>
    <div class="wei">
      没有数据了
    </div>
    <Tab></Tab>
  </div>

</template>

<script>
  import Tab from '../base/Tab.vue'
    export default {
        name: "Tongzhi",
      data(){
          return{
            tongzhilist:[]
          }
      },
      methods:{
          tongzhilista(){
            this.$axios.get("Liebiao",{type:"10"}).then((res)=>{
              // console.log(res.data)
              this.tongzhilist=res.data.data
            })
          }
      },
      created(){
        this.tongzhilista()
      },
      components:{
          Tab
      }
    }
</script>
<style>
  .zong_box{
    width: 100%;
  }

  /*头部开始*/
   .header{
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #c50206;
    align-items: center;
  }
   .header p{
    font-size: 15px;
    margin: 0 auto;
    color: #fff;
    font-weight: 400;
  }
  .zong_box .kong{
    width: 100%;
    height: 50px;
  }
  /*头部结束*/
   .xia-box{
    width: 100%;
    height: 100px;
    display: flex;
    border-bottom: 1px solid skyblue;
     margin: 0 auto;
  }
  .tu_box{
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
  }
  .tu_box i{
    font-size: 40px;
    background-color: red;
    border-radius: 20px;
    text-align: center;
  }
  .right{
    width: 100%;
    height: 100px;
  }
  .right h3{
    font-size: 18px;
    color: #585858;
    padding-top: 10px;
    /*padding-bottom: 20px;*/
  }
  .right p{
    font-size: 12px;
    color: #b3b3b3;
    padding-top: 10px;
  }
  .wei{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    color: #707274;
  }
</style>

<style scoped>

</style>
