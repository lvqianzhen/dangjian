<template>
  <div class="zong_box">
    <div class="kong"></div>
    <div class="header">
      <p>我的党建</p>
    </div>
    <div class="dahezi">
      <div class="tupuan_box">
        <div class="tubox">
          <img src="../img/yuan.png" alt="" v-show="bb==undefined">
          <img :src="yincang.avatar" alt="" v-show="bb!=undefined">
        </div>
        <router-link to="/login">
         <div class="p_box">
          <p v-show="bb==undefined">你还没有登录，请登录</p>
          <p v-text="yincang.userName" v-show="bb!=undefined"></p>
         </div>
        </router-link>
      </div>
    </div>
    <div class="xinxi_box">
        <router-link class="xinxi" to="/gerenxinxi">
          <img src="../img/person.png" alt="">
          <p>个人信息</p>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <router-link class="xinxi" to="/lianghuajifen">
          <img src="../img/lxjf.png" alt="">
          <p>个人量化积分</p>
          <i class="iconfont icon-jiantou" ></i>
        </router-link>
        <router-link class="xinxi" to="/xiugaimima">
          <img src="../img/xgmm.png" alt="">
          <p>修改密码</p>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
        <router-link class="xinxi" to="/dangfeijiaona">
          <img src="../img/icon3.png" alt="">
          <p>党费缴纳</p>
          <i class="iconfont icon-jiantou"></i>
        </router-link>
    </div>
    <div class="tuichu">
      <input type="submit" class="xiaokuang"
             v-show="bb!=undefined" value="退出登录" @click="exit">
      <!--<input type="submit" class="xiaokuang"  value="退出登录" @click="exit">-->
    </div>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from '../base/Tab.vue'
    export default {
        name: "Wode",
      components:{
          Tab
      },
      data(){
          return{
            bb:"",
            yincang:[],
          }
      },
      methods:{
        tuichu(){
          this.bb=localStorage.getItem("token")
        },
        exit(){
          this.$axios.get("tuichudenglu").then((res)=>{
            if (res.data.code==200){
              this.$message({
                type:"success",
                message:"退出成功",
              })
              setTimeout(()=>{
                this.$router.push("/login")
              },1000)
              localStorage.removeItem("token")
            }else{
              this.$message({
                type:"danger",
                message:"退出失败"
              })
            }
          })
        },
        touxiang(){
          this.$axios.get("gerenxinxi").then((res)=>{
            this.yincang=res.data.data
          })
        }
      },
      created(){
          this.tuichu(),
          this.touxiang()
      }
    }
</script>
<style>
  .zong_box{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  /*头部开始*/
  .zong_box .header{
    position: fixed;
    display: flex;
    left: 0;
    top: 0;
    width: 100%;
    height: 50px;
    background: #c50206;
    align-items: center;
  }
  .zong_box .header p{
    font-size: 18px;
    margin: 0 auto;
    color: #fff;
    font-weight: 400;
  }
  /*头部结束*/
  /*头部下部头像部分开始*/
  .dahezi{
    width: 100%;
    height: 120px;
  }
  .dahezi .tupuan_box{
    width: 100%;
    height: 120px;
    align-items: center;
    text-align: center;
    background: #c50206;
  }
  .dahezi .tupuan_box .tubox{
    width: 65px;
    height: 65px;
    padding-top: 20px;
    margin: 0 auto;
  }
  .dahezi .tupuan_box .tubox img{
    width: 60px;
    height: 60px;
    border-radius: 40px;
  }
  .dahezi .tupuan_box .p_box{
    width: 100%;
    height: 30px;
    align-items: center;
    line-height: 30px;
    text-align: center;
    margin: 0 auto;
  }
  .dahezi .tupuan_box .p_box p{
    color: #fff;
    font-size: 14px;
  }
  /*头部下部头像部分结束*/

 /*信息部分开始*/
  .xinxi_box{
    clear: both;
    width: 100%;
  }
  .xinxi_box .xinxi{
    width: 100%;
    height: 55px;
    display: flex;
    margin: 0 auto;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    border-bottom: 1px solid skyblue;
  }
  .xinxi_box .xinxi img{
    width: 36px;
    height: 36px;
    padding-left: 10px;
    line-height: 55px;
    margin-top: 10px;
    border-radius: 5px;
  }
  .xinxi_box .xinxi i{
    font-size: 30px;
    padding-right: 10px;
    color: #999999;
    line-height: 55px;
    position:absolute;
    right: 2px;
  }
  .xinxi_box .xinxi p{
    font-size: 16px;
    color: #333333;
    padding-left: 10px;
    text-align: center;
    line-height: 55px;
  }
  /*信息部分结束*/

  /*退出登录开始*/
  .tuichu{
    width: 100%;
    height: 50px;
    margin: 0 auto;
    align-items: center;
    text-align: center;
  }
  .tuichu .xiaokuang{
    width: 350px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background: #ef473a;
    color: #fff;
    font-size: 16px;
    font-weight: 400;
    border-radius: 10px;
    margin-top: 15px;
  }
  /*退出登录结束*/

</style>
<style scoped>

</style>
