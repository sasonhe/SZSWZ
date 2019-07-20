<template>
  <div class="abg swiper container">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <van-image width="100%" :src="ban1"/>
      </van-swipe-item>
      <van-swipe-item>
        <van-image width="100%" :src="ban2"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ban1: require('@/assets/swiper/1.jpg'),
        ban2: require('@/assets/swiper/2.jpg'),
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style>
.van-image__error, .van-image__img, .van-image__loading{
  vertical-align: top;
  border: none;
  display: inline-block;
  max-width: 100%;
  height: auto;
}
.abg{
  width: 90%;
  margin:-1rem auto 0;
}
.swiper .van-swipe{
  box-shadow:0px 0px 10px #333333;
}
</style>
