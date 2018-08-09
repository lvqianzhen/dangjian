<template>
  <div class="mima_box">
    <tiaozhuanheader>修改密码</tiaozhuanheader>
    <div class="neirong_box">
      <form action="">
        <div class="neirong_box1">
          <div class="zi">旧密码&nbsp;&nbsp;:</div>
          <input class="kuang" v-model="mima.pwd" type="password">
        </div>
        <div class="neirong_box1">
          <div class="zi">新密码&nbsp;&nbsp;:</div>
          <input class="kuang" v-model="mima.newPwd" type="password">
        </div>
        <div class="neirong_box1">
          <div class="zi">确认密码&nbsp;&nbsp;:</div>
          <input class="kuang" v-model="mima.querenmima" type="password">
        </div>
        <div class="neirong_box2">
          <input class="kuang" type="submit" value="确定"  @click="huoqumamijiekou">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
    export default {
        name: "xiugaimima",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            mima:{
              pwd:"",
              newPwd:"",
              querenmima:""
            }
          }
      },
      methods:{
          huoqumamijiekou(){
            if(this.mima.newPwd.trim()){
              if(this.mima.newPwd != this.mima.querenmima){
                this.$message({
                  type:'warning',
                  message:'请确定新密码是否一致'
                })
              }
            }

            this.$axios.post("gaimima",this.mima).then((res)=>{
              if(res.data.data=="请输入原密码"){
                this.$message({
                  type:'warning',
                  message:`${res.data.msg}`
                })
              }else if(res.data.data == '请输入新密码'){
                this.$message({
                  type:'warning',
                  message:`${res.data.msg}`
                })
              }else if(res.data.code == 200){
                this.$message({
                  type:'success',
                  message:`${res.data.msg}`
                })
                setTimeout(()=>{
                  this.$router.push("/wode")
                },1000)
              }
              console.log(res.data)
            })
          }
      },
    }
</script>
<style>
  .mima_box{
    width: 100%;
  }
  .mima_box .neirong_box{
    width: 315px;
    height: 400px;
    margin: 100px auto 0;

  }
  .mima_box .neirong_box .neirong_box1{
    width: 315px;
    height: 50px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .mima_box .neirong_box .neirong_box1 .zi{
    font-size: 16px;
    color: #707274;
    padding-bottom: 10px;
    font-weight: bold;
  }
  .mima_box .neirong_box .neirong_box1 .kuang{
    width: 315px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid skyblue;
    outline: none;
  }
  .mima_box .neirong_box .neirong_box2{
    width: 315px;
    height: 50px;
    margin-top: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
  }
  .mima_box .neirong_box .neirong_box2 .kuang{
    width: 315px;
    height: 50px;
    border-radius: 8px;
    border: 1px solid skyblue;
    background: #ef473a;
    font-size: 16px;
    color: #fff;
    margin-top: 10px;
  }
</style>
<style scoped>

</style>
