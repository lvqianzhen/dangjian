<template>
    <div class="header9">
      <tiaozhuanheader>信工新闻眼</tiaozhuanheader>
      <div class="kong"></div>
      <!--v-for="item in Newsone1" :key="item.id"-->
      <div>
        <!--<h3 v-html="item.title">黄淮学院关于推进“两学一做”学习教育常态化 制度化的实施方案</h3>-->
        <h3 v-html="Newsone1.title"></h3>
        <!--<p v-html="item.content">推进“两学一做”学习教育常态化制度化，是党中央加强思想教育和理论</p>-->
        <p v-html="Newsone1.content"></p>
        <!--<p>（一）</p>-->
        <!--<p>历史的发展，总有一些关键的节点、关键的时期。</p>-->
        <!--<p>2017年10月，历史会记下这个金秋。一个拥有8900多万党员的世界最大政党，一个在世界最大发展中国家久经考验、成熟执政的马克思主义政党——中国共产党，在世界瞩目下展开了中华民族新时代的华章。</p>-->
      </div>
    </div>
</template>

<script>
  import tiaozhuanheader from '../../base/tiaozhuanheader.vue'
    export default {
        name: "Newscontent",
      components:{
        tiaozhuanheader
      },
      data(){
        return{
          Newsone1:{
            title:'',
            content:''
          }
        }
      },
      methods:{
        newsone(){
          this.$axios.get("Liebiao",{id:this.$route.query.id}).then((res)=>{
             // console.log(res.data.data)
            this.Newsone1=res.data.data
          })
        }
      },
      created(){
        this.newsone()
      },
    }
</script>
<style>
  .header9{
    width: 100%;
  }
  .kong{
    width: 100%;
    height: 50px;
  }
  .header9 h3{
    font-size: 22px;
    color: #585858;
    padding: 10px;
  }
  .header9 p{
    font-size: 14px;
    color: #676767;
    padding: 10px;
    line-height: 2em;
  }
  .header9 img{
    width: 100%;
    height: 350px;
  }
</style>
<style scoped>

</style>
