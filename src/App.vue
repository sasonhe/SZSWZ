<template>
  <div id="app">
    <Heard/>
    <TopImg />
    <div class="bgColorB">
      <Jshao  class="d_jump"/>
      <Organiza class="d_jump"/>
    </div>

    <div class="bgColor d_jump">
      <Gust/>
    </div>

    <div class="d_jump bgColorD">
      <fen-date/>
    </div>
    <div class="bgColor d_jump">
      <div class="container">
        <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">往届嘉宾</van-divider>
      </div>
      <historyTabs/>
    </div>
    <div class="bgColorB d_jump">
      <Register/>
    </div>
    <div class="d_jump" style="background: #0c3d8a;">
      <Media/>
    </div>
    <div class="bgColorA d_jump">
      <Footer/>
    </div>
    <transition name="fade">
      <div class="goTop" v-show="goTop" @click="goToTop">
        <van-icon class="topSize" name="upgrade" />
      </div>
    </transition>
  </div>
</template>

<script>
import Heard from '@/components/Header';
import TopImg from '@/components/TopImg';
import Jshao from '@/components/Jshao';
import Organiza from '@/components/Organiza';
import Gust from '@/components/Gust';
import FenDate from '@/components/FenDate';
import Media from '@/components/Media';
import Register from '@/components/Register';
import Footer from '@/components/Footer';
import historyTabs from '@/components/historyTabs';
let timer = null;
export default {
  name: 'App',
  data(){
    return {
      goTop: false
    }
  },
  components: {
    Heard,TopImg,Jshao,Organiza,Gust,FenDate,Media,Register,Footer,historyTabs
  },
  mounted: function () {
    window.addEventListener('scroll', this.handleScroll, true);  // 监听（绑定）滚轮滚动事件
  },
  methods: {
    goToTop() {
        clearInterval(timer);
        timer = setInterval(function() {
          let curHeight = document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高度
          var now = curHeight;
          var speed = (0 - now) / 7; // 随着高度减速
          speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
          if (curHeight === 0) { //当前高度为零,停止这次计时器
            clearInterval(timer); // C1
          }
          document.documentElement.scrollTop = curHeight + speed; //直接给高度赋值,会调用needtotop方法
          document.body.scrollTop = curHeight + speed; //谷歌的
        }, 30);
      },
      handleScroll() {
        if(window.scrollY > 210){
          this.goTop = true
        }else{
          this.goTop = false
        }
        // let curHeight = document.documentElement.scrollTop || document.body.scrollTop; // 得到当前高度
        // console.log(curHeight);
      },
      IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
                    "SymbianOS", "Windows Phone",
                    "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
      }
    },
    computed:{
      // bgUrl () {
      //   let isWhat = this.IsPC()
      //   return isWhat ? this.pbg : this.mbg
      // }
    }
}
</script>

<style>
.container{
  max-width: 1140px;
  margin:0 auto;
  padding: .2rem;
}
*{
  margin:0;
  padding:0;
}

.title{
  font-size: .4rem;
}
.bgColorD{
  background: linear-gradient(to bottom,#ffffff,#d2e2f2);
}
.van-divider{
  line-height: normal;
}
.van-divider:after, .van-divider:before{
  border-width:1px;
}
.bgColor{
  /* background: linear-gradient(to bottom,#2094d3,#e1eefc); */
  background: #d2e2f2;

}
.bgColorC{
  background:#8db8fe;
}
.bTitle{
  font-size: .52rem;
  color: #263e64;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  padding: .5rem 0;
  margin: 0;
}
.mTitle{
  font-size: .4rem;
  font-weight: bold;
  color: #263e64;
}
.text-indent{
  text-indent: 2em;
  text-align: justify;
}
.bgColorA{
  background: #d4e3f3;
}
.bgColorB{
  background: #fff;
}

.goTop {
  position: fixed;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
  user-select: none;
}
.topSize{
  font-size: 1rem;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity .6s
}
.fade-enter,
.fade-leave-to {
  opacity: 0
}
.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.clearfix {
  zoom: 1;
}
.tab .van-tabs--line .van-tabs__wrap{
  height: 1.4rem;
}
</style>
