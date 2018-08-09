<template>
    <div class="footer">
      <router-link to="/shouye">
        <i class="iconfont icon-dangwugongkai"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/tongzhi">
        <i class="iconfont icon-xiaoxi"></i>
        <span>通知早知道</span>
      </router-link>
      <router-link to="/wode">
        <i class="iconfont icon-wodemian2"></i>
        <span>我的党建</span>
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "Tab"
    }
</script>

<style scoped>
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    margin-top: 5px;
    width: 100%;
    height: 60px;
    background: #fff;
    align-items: center;
  }
  i{
    font-size: 25px;
    padding-top: 5px;
  }
  a{
    flex: 1;
    font-size: 12px;
    text-align: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #b0b0b0;
    /*padding-top: 10px;*/
  }
  a.router-link-active{
    color :red;
    border-top: 2px solid red;
  }
</style>
