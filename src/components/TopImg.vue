<template>
<div class="body">
  <van-image width="100%" :src="bgUrl" />
</div>
</template>

<script>
export default {
  data() {
    return {
      topLogo: require('@/assets/logo/newLogo.jpg'),
      mLogo: require('@/assets/logo/mLogo.jpg')
    }
  },
  created() {},
  methods: {
    IsPC() {
      var userAgentInfo = navigator.userAgent;
      var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"
      ];
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
  computed: {
    bgUrl () {
      let isWhat = this.IsPC()
      return isWhat ? this.topLogo : this.mLogo
    }
  }
}
</script>

<style scoped>
.body {
  padding-top: 1.2rem;
}

.van-image {
  display: block;
}
</style>
