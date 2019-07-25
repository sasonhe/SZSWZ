<template>
<div class="container">
  <van-divider :style="{ borderColor: '#263e64',color:'#fff'}" class="bTitle">合作媒体</van-divider>
  <div>
    <van-row>
      <van-col class="imgwrapper" :span="span" v-for="item in 36" :key="item">
        <div :class="classObject">
          <van-image
            width="100%"
            height="100%"
            :src="'./static/media/'+item+'.jpg'"
          />
        </div>
      </van-col>
    </van-row>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      span:4,
      isClass:false
    }
  },
  created() {
    let isWhat = this.IsPC()
    if(isWhat){//PC
      this.span = 4
    }else{//Moblie
      this.span = 8
    }
  },
  methods: {
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
    classObject () {
      let isWhat = this.IsPC()
      return isWhat ? "imgItem" : "imgItemMoble"
    }
  }
}
</script>

<style scoped>
.imgwrapper{
  text-align: center;
}
.flex{
  display: flex;
}
.imgItem{
  display: inline-block;
  width: 3.4rem;
  height: 2rem;
  margin:6px;
  padding:6px;
}
.imgItemMoble{
  display: inline-block;
  width: 1.6rem;
  height: 1rem;
  /* margin: 6px; */
  padding: 6px;
  /* border: 1px solid #ddd; */
}
</style>
