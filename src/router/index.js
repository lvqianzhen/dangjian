import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Shouye from '../components/Shouye.vue'
import Tongzhi from '../components/Tongzhi.vue'
import Wode from '../components/Wode.vue'
import login from '../tiaozhuanyemian/login.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import tiaozhuanheader from '../base/tiaozhuanheader.vue'
import gerenxinxi from '../tiaozhuanyemian/gerenxinxi.vue'
import gerenxinxixiugai from '../tiaozhuanyemian/gerenxinxixiugai.vue'
import lianghuajifen from '../tiaozhuanyemian/lianghuajifen.vue'
import jifenmingxi from '../tiaozhuanyemian/jifenmingxi.vue'
import xiugaimima from '../tiaozhuanyemian/xiugaimima.vue'
import dangfeijiaona from '../tiaozhuanyemian/dangfeijiaona.vue'
import weixinma from '../erweima/weixinma.vue'
import zhifubaoma from '../erweima/zhifubaoma.vue'
import news from '../zhuyetiaozhuanzujian/news/news.vue'
import life from '../zhuyetiaozhuanzujian/life/life.vue'
import sixianghuibao2 from '../zhuyetiaozhuanzujian/life/sixianghuibao/sixianghuibao2.vue'
import sixianghuibao1 from '../zhuyetiaozhuanzujian/life/sixianghuibao/sixianghuibao1.vue'
import Map from '../zhuyetiaozhuanzujian/life/Map.vue'
import exchange from '../zhuyetiaozhuanzujian/yunhudong/exchange.vue'
import yidiantong from '../zhuyetiaozhuanzujian/yidiantong.vue'
import liangshenfen from '../zhuyetiaozhuanzujian/liangshenfen.vue'
import history from '../zhuyetiaozhuanzujian/history.vue'
import liangshenfennews from '../zhuyetiaozhuanzujian/liangshenfennews.vue'
import yidiantongnews from '../zhuyetiaozhuanzujian/yidiantongnews.vue'
import Newscontent from '../zhuyetiaozhuanzujian/news/Newscontent.vue'
import lifestudy from '../zhuyetiaozhuanzujian/life/xuexi/lifestudy.vue'
import minzhupingyi from '../zhuyetiaozhuanzujian/life/minzhupingyi/minzhupingyi.vue'
import canpingdangyuan from '../zhuyetiaozhuanzujian/life/minzhupingyi/canpingdangyuan.vue'
import minzhupingyinews from '../zhuyetiaozhuanzujian/life/minzhupingyi/minzhupingyinews.vue'
import gerenzongjie from '../zhuyetiaozhuanzujian/life/minzhupingyi/gerenzongjie.vue'
import politystudy from '../zhuyetiaozhuanzujian/life/xuexi/politystudy.vue'
import lianjieone from '../zhuyetiaozhuanzujian/tupiansigelianjie/lianjieone.vue'
import everystudy1 from '../zhuyetiaozhuanzujian/tupiansigelianjie/everystudy1.vue'
import lianjiethree from '../zhuyetiaozhuanzujian/tupiansigelianjie/lianjiethree.vue'
import lianjietwo from '../zhuyetiaozhuanzujian/tupiansigelianjie/lianjietwo.vue'
import everystudy3 from '../zhuyetiaozhuanzujian/tupiansigelianjie/everystudy3.vue'
import everystudy2 from '../zhuyetiaozhuanzujian/tupiansigelianjie/everystudy2.vue'
import lianjiefore from '../zhuyetiaozhuanzujian/tupiansigelianjie/lianjiefore.vue'
import everystudy4 from '../zhuyetiaozhuanzujian/tupiansigelianjie/everystudy4.vue'
import inform_knows_one from '../zhuyetiaozhuanzujian/inform_knows/inform_knows_one.vue'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

export default new Router({
  routes: [
    {path:"/", redirect:"shouye"},
    {path:"/shouye", component:Shouye},
    {path:"/tongzhi", component:Tongzhi},
    {path:"/wode", component:Wode},
    {path:"/login", component:login},
    {path:"/tiaozhuanheader", component:tiaozhuanheader},
    {path:"/gerenxinxi", component:gerenxinxi},
    {path:"/gerenxinxixiugai", component:gerenxinxixiugai},
    {path:"/lianghuajifen", component:lianghuajifen},
    {path:"/xiugaimima", component:xiugaimima},
    {path:"/dangfeijiaona", component:dangfeijiaona},
    {path:"/weixinma", component:weixinma},
    {path:"/zhifubaoma", component:zhifubaoma},
    {path:"/news", component:news},
    {path:"/life", component:life},
    {path:"/exchange", component:exchange},
    {path:"/yidiantong", component:yidiantong},
    {path:"/liangshenfen", component:liangshenfen},
    {path:"/history", component:history},
    {path:"/Newscontent", component:Newscontent},
    {path:"/lifestudy", component:lifestudy},
    {path:"/politystudy", component:politystudy},
    {path:"/lianjieone", component:lianjieone},
    {path:"/everystudy1", component:everystudy1},
    {path:"/lianjiethree", component:lianjiethree},
    {path:"/everystudy3", component:everystudy3},
    {path:"/lianjiefore", component:lianjiefore},
    {path:"/lianjietwo", component:lianjietwo},
    {path:"/everystudy4", component:everystudy4},
    {path:"/everystudy2", component:everystudy2},
    {path:"/inform_knows_one", component:inform_knows_one},
    {path:"/yidiantongnews", component:yidiantongnews},
    {path:"/liangshenfennews", component:liangshenfennews},
    {path:"/Map", component:Map},
    {path:"/minzhupingyi", component:minzhupingyi},
    {path:"/gerenzongjie", component:gerenzongjie},
    {path:"/minzhupingyinews", component:minzhupingyinews},
    {path:"/canpingdangyuan", component:canpingdangyuan},
    {path:"/jifenmingxi", component:jifenmingxi},
    {path:"/sixianghuibao2", component:sixianghuibao2},
    {path:"/sixianghuibao1", component:sixianghuibao1},
  ]
})
