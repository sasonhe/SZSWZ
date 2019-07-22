<template>
  <div class="abg swiper container">
    <div v-if="!isP">
      <van-image class="img" width="100%" :src="ban1"/>
      <van-image class="img" width="100%" :src="ban2"/>
    </div>
    <van-swipe v-else :autoplay="3000" indicator-color="white">
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
        isP:false
      }
    },
    created() {
      let isWhat = this.IsPC();
      if(isWhat){
        this.isP = true;
      }else{
        this.isP = false;
      }
    },
    methods: {
      // 判断PC
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
.img{
  margin-bottom: .4rem;
  box-shadow:0px 0px 10px #333333;
}
.abg{
  width: 90%;
  /* margin:1rem auto 0; */
}
.swiper .van-swipe{
  box-shadow:0px 0px 10px #333333;
}
</style>
