<template>
  <div class="da_box1">
    <div class="tiaoheader">
      <i class="iconfont icon-fanhui1" @click="goBack"></i>
      <div class="zhong1">
        <p>修改个人信息</p>
      </div>
      <div class="rights1">
        <p @click="baocun">保存</p>
      </div>
    </div>
    <div class="kong"></div>
    <div class="xia_box1" >
      <div class="a1">
        <p class="b1">头像</p>
        <el-upload
          class="avatar-uploader1"
          action="https://upload-z1.qiniup.com"
          :on-success="aa"
          :data="{token:token}">
          <img v-if="huoqugerenxinxia.avatar" :src="huoqugerenxinxia.avatar" class="avatar1">
          <i v-else class="el-icon-plus avatar-uploader-icon1"></i>
        </el-upload>
      </div>
      <div class="a11">
        <p class="b11">名称</p>
        <input class="shurukuang" type="text" v-model="huoqugerenxinxia.userName" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">身份证</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.idCard" dir="rtl" style="border: 0px;outline:none;" ></input>
      </div>
      <div class="a11">
        <p class="b11">家庭住址</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.homeAddr" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">工作地址</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.workAddr" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">民族</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.nation"dir="rtl"  style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">微信号</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.weChat" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">qq号</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.qq" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">性别</p>
        <el-radio-group class="shurukuang" v-model="huoqugerenxinxia.sex">
          <el-radio :label="1">男</el-radio>
          <el-radio :label="0">女</el-radio>
        </el-radio-group>
      </div>
      <div class="a11">
        <p class="b11">职称</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.position" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">薪资水平</p>
        <input class="shurukuang" v-model="huoqugerenxinxia.salary" dir="rtl" style="border: 0px;outline:none;"></input>
      </div>
      <div class="a11">
        <p class="b11">入党时间</p>
        <div class="block">
          <el-date-picker
            v-model="huoqugerenxinxia.joinTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="a11">
        <p class="b11">党费最后缴纳时间</p>
        <div class="block">
          <el-date-picker
            v-model="huoqugerenxinxia.payTime"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </div>
      </div>
      <div class="a11">
        <p class="b11">当前身份</p>
        <select name="status" class="shurukuang" v-model="huoqugerenxinxia.status"  style="border: 0px;outline:none;">
          <option value="0">党员</option>
          <option value="1">积极分子</option>
          <option value="2">预备党员</option>
        </select>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        name: "gerenxinxixiugai",
        data(){
           return{
             token:"",
             huoqugerenxinxia:{
               idCard:"",
               avatar:"",
               userName:"",
               homeAddr:"",
               workAddr:"",
               nation:"",
               weChat:"",
               qq:"",
               sex:1,
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
            this.$router.go(-1)
          },
          aa(res) {
            // console.log(res)
            this.huoqugerenxinxia.avatar =res.url;
          },
          getToken(){
            this.$axios.get("upload").then((res)=>{
              this.token=res.data.data
            })
          },
          tijiaoshenhe(){
            this.$axios.post("xinxixiugai",this.huoqugerenxinxia).then((res)=>{
              // console.log(res.data)
              if (res.data.code==200) {
                this.$message({
                  type:"success",
                  message:'上传头像成功'
                })
              }
              else{
                this.$message({
                  type:"danger",
                  message:'上传图片失败'
                })
              }
            })
          },
          // 上传头像结束
          huoqugerenxinxi(){
            this.$axios.get("gerenxinxi").then((res)=>{
              this.huoqugerenxinxia=res.data.data
            })
          },
          huoquxiugaixinxi(){
            this.$axios.post("xinxixiugai").then((res)=>{
              this.huoqugerenxinxia=res.data.data
            })
          },
          baocun(){
            this.$axios.post("xinxixiugai",this.huoqugerenxinxia).then((res)=>{
              // console.log(res.data)
              if (res.data.code==200){
                  this.$router.push('/gerenxinxi')
              }
            })
          }
        },
      created(){
          this.huoqugerenxinxi()
          this.getToken()
      }
    }
</script>
<style>
  .da_box1{
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
  .tiaoheader .zhong1{
    width: 120px;
    height: 50px;
    margin: 0 auto;
    padding-left: 20px;
  }
  .tiaoheader .rights1{
    width: 60px;
    height: 50px;
  }
  .tiaoheader i{
    font-size: 30px;
    position: absolute;
    left: 10px;
  }
  .tiaoheader .rights1 p{
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
  .da_box1 .xia_box1{
    width: 100%;
  }
  .da_box1 .xia_box1 .a1{
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
  }
  .da_box1 .xia_box1 .a1 .b1{
    padding-left: 10px;
  }
  /*.da_box1 .xia_box1 .a1 img{*/
    /*width: 30px;*/
    /*height: 30px;*/
    /*position: absolute;*/
    /*right: 10px;*/
  /*}*/
  /*上传头像样式开始*/
  .avatar-uploader1{
    width: 60px;
    height: 60px;
    border: 2px dashed #d9d9d9;
    position: absolute;
    right: 10px;

  }
  .avatar-uploader1 .el-upload{
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader1 .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon1 {
    font-size: 40px;
    color: #8c939d;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .avatar1 {
    width: 60px;
    height: 60px;
    display: block;
  }
  /*上传头像样式结束*/

  /*下部开始*/
  .da_box1 .xia_box1 .a11{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
  }
  .da_box1 .xia_box1 .a11 .shurukuang{
    height: 50px;
    position: absolute;
    right: 10px;
    line-height: 50px;
    text-align: right;
    font-size: 14px;
    color: #000;
  }
  .da_box1 .xia_box1 .a11 .b11{
    padding-left: 10px;
  }
  .a11 el-radio__input{
    width: 5px;
    height: 50px;
  }
  .a11 el-radio__inner{
    width: 14px;
    height: 14px;
  }
  .a11 el-radio__label{
    width: 20px;
    height: 50px;
  }
  .el-radio+.el-radio{
    margin-left: 0;
  }
  .a11 .block{
    width: 80px;
    height: 50px;
    line-height: 50px ;
    padding: 0;
  }
  .el-date-editor.el-input, .el-date-editor.el-input__inner{
    width: 135px;
    height: 50px;
    position: absolute;
    right: 10px;
  }
  .el-input__inner{
    padding: 0px;
  }
</style>
<style scoped>

</style>
