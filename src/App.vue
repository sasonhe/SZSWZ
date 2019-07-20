<template>
  <div id="app">
    <Heard/>
    <TopImg/>
    <div class="bgColor">
      <Swiper/>
      <Jshao/>
    </div>
    <Organiza/>
    <div class="bgColorA">
      <Gust/>
    </div>

  </div>
</template>

<script>
import Heard from '@/components/Header';
import TopImg from '@/components/TopImg';
import Swiper from '@/components/Swiper';
import Jshao from '@/components/Jshao';
import Organiza from '@/components/Organiza';
import Gust from '@/components/Gust';

export default {
  name: 'App',
  components: {
    Heard,TopImg,Swiper,Jshao,Organiza,Gust
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
</style>
