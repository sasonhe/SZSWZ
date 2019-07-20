<template>
  <div id="app">
    <Heard/>
    <TopImg />
    <div class="bgColor">
      <Swiper/>
      <Jshao  class="d_jump"/>
    </div>
    <Organiza class="d_jump"/>
    <div class="bgColorA d_jump">
      <Gust/>
    </div>
    <transition name="fade">
      <div class="goTop" v-show="goTop" @click="goToTop">
        <van-icon class="topSize" name="upgrade" />
      </div>
    </transition>
    <!-- <Steps/> -->
  </div>
</template>

<script>
import Heard from '@/components/Header';
import TopImg from '@/components/TopImg';
import Swiper from '@/components/Swiper';
import Jshao from '@/components/Jshao';
import Organiza from '@/components/Organiza';
import Gust from '@/components/Gust';
// import Steps from '@/components/Steps';
let timer = null;
export default {
  name: 'App',
  data(){
    return {
      goTop: false
    }
  },
  components: {
    Heard,TopImg,Swiper,Jshao,Organiza,Gust
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
      }
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
.bgColor{
  background: linear-gradient(to bottom,#7293d5,#e1eefc);
  background: #e1eefc;
}
.bTitle{
  font-size: .5rem;
  color: #263e64;
  font-weight: bold;
  letter-spacing: 3px;
  text-align: center;
  padding: .5rem 0;
  margin: 0;
}
.mTitle{
  font-size: .4px;
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


.goTop {
  position: fixed;
  bottom: 50px;
  right: 20px;
  cursor: pointer;
  user-select: none;
}
.topSize{
  font-size: 40px;
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
</style>
