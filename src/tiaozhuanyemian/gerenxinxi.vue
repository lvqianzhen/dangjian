<template>
  <div class="da_box">
    <div class="tiaoheader">
      <i class="iconfont icon-fanhui1" @click="goBack"></i>
      <div class="zhong">
        <p>个人信息</p>
      </div>
      <router-link to="/gerenxinxixiugai">
        <div class="rights">
            <p>编辑</p>
        </div>
      </router-link>
    </div>
    <div class="kong"></div>
    <div class="xia_box">
      <div class="a">
        <p class="b">头像</p>
        <img :src="huoqugerenxinxia.avatar" alt="">
      </div>
      <div class="a1">
        <p class="b1">名称</p>
        <div class="you" v-text="huoqugerenxinxia.userName"></div>
      </div>
      <div class="a1">
        <p class="b1">身份证</p>
        <span class="you" v-text="huoqugerenxinxia.idCard"></span>
      </div>
      <div class="a1">
        <p class="b1">家庭住址</p>
        <span class="you" v-text="huoqugerenxinxia.homeAddr"></span>
      </div>
      <div class="a1">
        <p class="b1">工作地址</p>
        <span class="you" v-text="huoqugerenxinxia.workAddr"></span>
      </div>
      <div class="a1">
        <p class="b1">民族</p>
        <span class="you" v-text="huoqugerenxinxia.nation"></span>
      </div>
      <div class="a1">
        <p class="b1">微信号</p>
        <span class="you" v-text="huoqugerenxinxia.weChat"></span>
      </div>
      <div class="a1">
        <p class="b1">qq号</p>
        <span class="you" v-text="huoqugerenxinxia.qq"></span>
      </div>
      <div class="a1">
        <p class="b1">性别</p>
        <div class="you">
          <span v-show="huoqugerenxinxia.sex==1">男</span>
          <span v-show="huoqugerenxinxia.sex==0">女</span>
        </div>
      </div>
      <div class="a1">
        <p class="b1">职称</p>
          <span class="you" v-text="huoqugerenxinxia.position"></span>
      </div>
      <div class="a1">
        <p class="b1">薪资水平</p>
        <span class="you" v-text="huoqugerenxinxia.salary"></span>
      </div>
      <div class="a1">
      <p class="b1">入党时间</p>
      <span class="you" v-text="huoqugerenxinxia.joinTime"></span>
    </div>
      <div class="a1">
        <p class="b1">党费最后缴纳时间</p>
        <span class="you" v-text="huoqugerenxinxia.payTime"></span>
      </div>
      <div class="a1">
        <p class="b1">当前身份</p>
        <div class="you">
          <span v-show="huoqugerenxinxia.status==0">党员</span>
          <span v-show="huoqugerenxinxia.status==1">积极分子</span>
          <span v-show="huoqugerenxinxia.status==2">预备党员</span>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "gerenxinxi",
        data(){
           return{
             huoqugerenxinxia:{
               idCard:"",
               avatar:"",
               userName:"",
               homeAddr:"",
               workAddr:"",
               nation:"",
               weChat:"",
               qq:"",
               sex:"",
               edu:"",
               position:"",
               salary:"",
               joinTime:"",
               payTime:"",
               status:"",
             }
           }
        },
        methods:{
          goBack(){
            this.$router.go(-3)
          },
          huoqugerenxinxi(){
            this.$axios.get("gerenxinxi").then((res)=>{
              // console.log(res.data)
              this.huoqugerenxinxia=res.data.data
            })
          }
        },
      created(){
          this.huoqugerenxinxi()
      }
    }
</script>
<style>
  .da_box{
    width: 100%;
  }
  /*头部开始*/
  .tiaoheader{
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    height: 50px;
    background: #c50206;
    color: #fff;
    line-height: 50px;
    text-align: center;
  }
  .tiaoheader .zhong{
    width: 120px;
    height: 50px;
    margin: 0 auto;
    padding-left: 20px;
  }
  .tiaoheader .rights{
    width: 60px;
    height: 50px;
  }
  .tiaoheader i{
    font-size: 30px;
    position: absolute;
    left: 10px;
  }
  .tiaoheader .rights p{
    font-size: 18px;
    color: #fff;
    padding-right: 10px;
  }
  /*头部结束*/
  .kong{
    width: 100%;
    height: 50px;
  }
  /*内容开始*/
  .da_box .xia_box{
    width: 100%;
  }
  .da_box .xia_box .a{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .da_box .xia_box .a .b{
    padding-left: 10px;
  }
  .da_box .xia_box .a img{
    width: 60px;
    height: 60px;
    position: absolute;
    right: 10px;
  }
  /*下部开始*/
  .da_box .xia_box .a1{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .da_box .xia_box .a1 .you{
    height: 50px;
    position: absolute;
    right: 10px;
    line-height: 50px;
  }
  .da_box .xia_box .a1 .b1{
    padding-left: 10px;
  }
</style>
<style scoped>

</style>
