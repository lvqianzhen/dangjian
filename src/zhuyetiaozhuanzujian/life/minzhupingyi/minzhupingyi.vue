<template>
    <div class="pingyi_box">
      <tiaozhuanheader>掌上组织生活</tiaozhuanheader>
      <div class="kong"></div>
      <div class="pingyi_xia_box">
        <div class="pingyi_xia_xiaobox">
          <router-link to="/gerenzongjie">
              <input type="submit" class="ge" value="个人总结">
          </router-link>
          <router-link to="/minzhupingyinews">
              <input type="submit" class="ge" value="民主评议">
          </router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import tiaozhuanheader from '../../../base/tiaozhuanheader.vue'
    export default {
        name: "minzhupingyi",
      components:{
        tiaozhuanheader
      }
    }
</script>

<style scoped>
.pingyi_box{
  width: 100%;
}
.kong{
  width: 100%;
  height: 50px;
}
.pingyi_xia_box{
  width: 100%;
}
.pingyi_xia_xiaobox{
  width: 300px;
  height: 200px;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  margin-top: 200px;
}
.ge{
  width: 220px;
  height: 50px;
  margin-top: 20px;
  background-color:  #c50206;
  border-radius: 10px;
  font-size: 18px;
  color: #fff;
}

</style>
