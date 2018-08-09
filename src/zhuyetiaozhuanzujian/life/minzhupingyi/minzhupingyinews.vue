<template>
  <div class="pingyila_box">
    <tiaozhuanheader>民主评议</tiaozhuanheader>
    <div class="kong"></div>
    <div class="pingyila_xia_box">
      <h4 >{{minzhupingyinewsa.title}}</h4>
      <p v-html="minzhupingyinewsa.desc"></p>
      <!--<p>1、坚定理想信念、贯彻执行党的路线方针政策情况；</p>-->
      <!--<p>2、参加“两学一做”学习教育情况；</p>-->
      <!--<p>3、参加党的组织生活、按要求交纳党费；</p>-->
      <!--<p>4、学习情况、业务能力提高情况；</p>-->
      <!--<p>5、关心集体、团结同志，发挥先锋模范作用情况；</p>-->
      <!--<p>6、联系群众、关心群众、服务群众情况；</p>-->
      <!--<p>7、遵守党章党规、法律法规和学校规章制度情况。</p>-->
      <div class="pingyila_xia_xiaobox">
        <!--<div class="xiala_box" v-for="item in xialadan" :key="item._id">-->
        <div class="xiala_box">
           <select  class="kuang" v-model="value">
             <option value="" v-for="item in xialadan"
                :key="item._id"
                :label="item.branchName"
                :value="item._id"
                  ></option>
           </select>
            <!--<el-select v-model="value" class="kuang">-->
              <!--<el-option-->
                <!--v-for="item in xialadan"-->
                <!--:key="item.value"-->
                <!--:branchName="item.branchName"-->
                <!--:value="item.value">-->
              <!--</el-option>-->
            <!--</el-select>-->
            <input type="submit" class="xiala_box_you" value="下一步" @click="tiaozhuan">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import tiaozhuanheader from '../../../base/tiaozhuanheader.vue'
    export default {
        name: "minzhupingyinews",
      components:{
        tiaozhuanheader
      },
      data(){
        return{
          minzhupingyinewsa:{
            title:"",
            desc:"",
          },
          xialadan:[],
          value:""
        }
      },
      methods:{
          pingyi(){
            this.$axios.get("minzhupingyinewsc",{status:1}).then((res)=>{
              // console.log(res.data.data)
              this.minzhupingyinewsa=res.data.data[0]
            })
          },
          xialadana(){
            this.$axios.get("danzhibu").then((res)=>{
              // console.log(res.data.data)
              this.xialadan=res.data.data
              // console.log(this.xialadan)
            })
          },
          tiaozhuan(){
            // console.log(this.value)
            this.$router.push({path:'/canpingdangyuan',query:{id:this.value}})
          }
      },
      created(){
          this.pingyi()
          this.xialadana()
      }
    }
</script>

<style scoped>
  .pingyila_box{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .pingyila_xia_xiaobox{
    width: 100%;
  }
  .pingyila_xia_box{
    width: 100%;
  }
  .pingyila_xia_box h4{
    width: 100%;
    height: 30px;
    padding-top: 10px;
    text-align: center;
    align-items: center;
    font-size: 18px;
    color: #525252;
    margin: 0 auto;
  }
  .pingyila_xia_box p{
    padding: 5px 10px;
    font-size: 14px;
    color: #777;
  }
  .xiala_box{
    display: flex;
    width: 320px ;
    height: 100px;
    align-items: center;
    /*line-height: 100px;*/
    margin: 0 auto;
    margin-top: 100px;
    text-align: center;
  }
  .xiala_box .kuang{
    width: 200px;
    height: 40px;
    background: #c50206;
    font-size: 18px;
    color: #fff;
    border-radius: 8px;
    margin-right: 20px;
    /*text-align: center;*/
    /*align-items: center;*/
  }
  .xiala_box .xiala_box_you{
    width: 80px;
    height: 40px;
    border-radius: 8px;
    background: #c50206;
    font-size: 18px;
    color: #fff;
  }
</style>
