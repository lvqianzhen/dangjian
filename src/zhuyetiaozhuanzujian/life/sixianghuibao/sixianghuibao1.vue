<template>
  <div class="gerenzongjie_box">
    <tiaozhuanheader>思想汇报</tiaozhuanheader>
    <div class="kong"></div>
    <div class="gerenzongjie_xia_box">
      <el-upload
        class="avatar-uploader"
        action="https://upload-z1.qiniup.com"
        :on-success="aa"
        :data="{token:token}">
        <img v-if="tupian" :src="tupian" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
      <input type="submit" class="tijiao" value="提交审核" @click="tijiaoshenhe">
    </div>
  </div>
</template>
<script>
  import tiaozhuanheader from '../../../base/tiaozhuanheader.vue'
    export default {
        name: "sixianghuibao1",
      components:{
        tiaozhuanheader
      },
      data() {
        return {
          token:"",
          tupian:""
        };
      },
      methods: {
        aa(res) {
          // console.log(res)
          this.tupian = res.url
        },
        getToken(){
          this.$axios.get("upload").then((res)=>{
            // console.log(res.data)
            this.token=res.data.data
          })
        },
        tijiaoshenhe(){
          this.$axios.post("sixiang",{pic:this.tupian}).then((res)=>{
            // console.log(res.data)
            if (res.data.code==200) {
              this.$message({
                type:"success",
                message:'提交图片成功'
              })
              setTimeout(()=>{
                this.$router.push("/sixianghuibao2")
              },1000)
            }else if(res.data.code==400){
              this.$message({
                type:"danger",
                message:'思想汇报不能重复提交'
              })
            }
            else{
              this.$message({
                type:"danger",
                message:'提交图片失败'
              })
            }
          })
        },
      },
      created(){
        this.getToken()
      }
    }
</script>

<style scoped>
  .gerenzongjie_box{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .gerenzongjie_xia_box{
    width: 100%;
  }
  .avatar-uploader{
    width: 100px;
    height: 100px;
    margin-top: 10px;
    margin-left: 10px;
    border: 2px dashed #d9d9d9;
  }
  .avatar-uploader .el-upload {
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 60px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
  .tijiao{
    width: 100%;
    height: 50px;
    margin-top: 360px;
    background: #c50206;
    font-size: 18px;
    color: #fff;
    border-radius: 10px;
  }
</style>
