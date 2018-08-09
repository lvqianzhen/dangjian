<template>
    <div class="hezi1">
      <tiaozhuanheader>个人量化积分</tiaozhuanheader>
      <div class="kong"></div>
      <div class="tupianbeijing">
        <p v-text="huoqujifen">52</p>
      </div>
      <router-link to="/jifenmingxi">
        <div class="header_hezi">
          <img src="../img/lxjf.png" alt="">
          <div class="xiaohezi1">
            <p>积分明细</p>
            <i class="iconfont icon-jiantou"></i>
          </div>
        </div>
      </router-link>
      <div class="content_hezi">
        <p>积分明细</p>
        <i class="iconfont icon-question"></i>
      </div>
      <div class="content_hezixia">
        <p>登录APP</p>
        <span>5</span>
      </div>
      <div class="content_hezixia">
        <p>完善个人信息</p>
        <span>2</span>
      </div>
      <div class="content_hezixia">
        <p>查看积分</p>
        <span>1</span>
      </div>
      <div class="content_hezixia">
        <p>按时交纳党费</p>
        <span>10</span>
      </div>
      <div class="content_hezixia">
        <p>查看通知</p>
        <span>2</span>
      </div>
      <div class="content_hezixia">
        <p>了解学院工作动态</p>
        <span>5</span>
      </div>
      <div class="content_hezixia">
        <p>上交思想汇报审核通过</p>
        <span>5</span>
      </div>
      <div class="content_hezixia">
        <p>主动学习相关文件</p>
        <span>10</span>
      </div>
      <div class="content_hezixia">
        <p>认真书写新的总结并上交，经审核通过</p>
        <span>5</span>
      </div>
      <div class="content_hezixia">
        <p>提交个人总结，并参与评议</p>
        <span>2</span>
      </div>
      <div class="content_hezixia">
        <p>积极参与互动</p>
        <span>5</span>
      </div>
    </div>
</template>

<script>
  import tiaozhuanheader from '../base/tiaozhuanheader.vue'
    export default {
        name: "lianghuajifen",
      components:{
        tiaozhuanheader
      },
      data(){
          return{
            huoqujifen:""
          }
      },
      methods:{
        linghuajifenhuoqu(){
          this.$axios.get("jifen").then((res)=>{
            this.huoqujifen=res.data.total
            // console.log(res.data)
          })
        }
      },
      created(){
        this.linghuajifenhuoqu()
      }
    }
</script>

<style scoped>
.hezi1{
  width: 100%;
}
  .kong{
    width: 100%;
    height: 50px;
  }
  .hezi1 .tupianbeijing{
    background: url("../img/yuantu.png");
    background-size: 100%;
    height: 144.86px;
  }
.hezi1 .tupianbeijing p{
  color: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 144.86px;
}
/*链接开始*/
.hezi1 .header_hezi{
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid skyblue;
}
.hezi1 .header_hezi img{
  width: 40px;
  height: 40px;
  padding-left: 5px;
}
.hezi1 .header_hezi .xiaohezi1{
  width: 100%;
  height: 50px;
  display: flex;
  line-height: 50px;
  font-size: 16px;
  color: #5a5a5a;
  padding-left: 10px;
}
.hezi1 .header_hezi .xiaohezi1 i{
 font-size: 20px;
  position: absolute;
  right: 10px;
  color: #999999;
}
/*链接下部开始*/
.hezi1 .content_hezi{
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 16px;
  color: #5a5a5a;
  line-height: 40px;
  border-bottom: 1px solid skyblue;
}
.hezi1 .content_hezi p{
  font-size: 16px;
  color: #5a5a5a;
  line-height: 40px;
  padding-left: 10px;
}
.hezi1 .content_hezi i{
 font-size: 30px;
  color: darkred;
  position: absolute;
  right: 10px;
}
  /*下部一样的部分开始*/
.hezi1 .content_hezixia{
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 16px;
  color: #5a5a5a;
  line-height: 40px;
  border-bottom: 1px solid skyblue;
}
.hezi1 .content_hezixia p{
  font-size: 16px;
  color: #5a5a5a;
  line-height: 40px;
  padding-left: 10px;
}
.hezi1 .content_hezixia span{
  font-size: 20px;
  color: darkred;
  position: absolute;
  right: 12px;
}
</style>
