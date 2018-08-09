<template>
  <div class="denglu_box">
    <div class="header">
      <i class="iconfont icon-fanhui1" @click="goBack"></i>
      <span>登录</span>
    </div>
    <div class="input_box">
      <div class="zhong">
        <div class="tu_box">
          <img src="../img/logo.png" alt="">
        </div>
      </div>
      <form action=""method="post" >
        <input class="input_a" type="number" v-model="info.idCard" placeholder="身份证号">
        <br>
        <input class="input_a" type="password"v-model="info.pwd" placeholder="密码" @keyup.enter="f">
        <br>
        <input class="input_b" type="button" value="登录" @click="logina">
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            info:{
              idCard:"",
              pwd:""
            }
          }
      },
        methods:{
          f(){
            this.logina();
          },
          goBack(){
            this.$router.go(-1)
          },
          logina(){
            this.$axios.post("loginparty",this.info).then(res=>{
              if (res.data.code==200) {
                let token =res.data.data.token
                // console.log(token)
                localStorage.setItem("token",token)
                this.$message({
                  type:"success",
                  message:"登陆成功"
                })
                setTimeout( () => {
                  this.$router.push("/shouye")
                },1000)
              }else{
                this.$message({
                  type:"danger",
                  message:"登陆失败"
                })
              }
                // console.log(this.info)
                //   console.log(res.data)

            })
          }
        }
    }
</script>

<style >
.denglu_box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #c50206;

}
.denglu_box .header{
  width: 100%;
  height: 43px;
  color: #fff;
  font-size: 18px;
  margin: 0 auto;
  text-align: center;
  line-height: 43px;
  align-items: center;
  /*z-index: 1;*/
  /*position: relative;*/
}
.denglu_box .header i{
  position: fixed;
  left: 5px;
  color: #fff;
  font-size: 25px;
}
.denglu_box .header span{
  position: fixed;
  left: 50%;
}
.denglu_box .input_box{
  width: 100%;
  height: 300px;
  align-items: center;
  text-align: center;
  /*z-index: 1;*/
  /*padding-top: 43px;*/
}
.denglu_box .input_box .zhong{
  width:100%;
  height: 100px;
  margin: 0 auto;
  align-items: center;
  line-height: 100px;
  text-align: center;
  display: flex;
}
.denglu_box .input_box .zhong .tu_box{
   width: 200px;
   height: 50px;
  align-items: center;
  line-height: 100px;
  text-align: center;
  margin: 0 auto;
 }
.denglu_box .input_box .zhong .tu_box img{
  width: 200px;
  height: 50px;
  color: #fff;
  margin: 0 auto;
}
.denglu_box .input_box .input_a{
  width: 300px;
  height: 42px;
  border-radius: 6px;
  background: #c50206;
  margin-bottom: 10px;
  border: 1px solid #ff0;
  font-size: 14px;
  color: #fff;
}
.denglu_box .input_box .input_a::-webkit-input-placeholder{
  color: #fff;
  padding-left: 8px;
  font-size: 16px;
}
.denglu_box .input_box .input_b{
  width: 300px;
  height: 42px;
  border-radius: 6px;
  background: #e3574f;
  margin-bottom: 10px;
  border: 1px solid #e3574f;
  font-size: 14px;
  color: #fff;
}
</style>
