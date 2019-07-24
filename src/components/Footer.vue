<template>
  <div class="footer container" style="min-height: 6rem;">
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">联系我们</van-divider>
    <van-row>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">地址：坪山区瑞景路36号格兰云天国际酒店</h3>
          <h3 class="address">时间：2019年9月11日-12日</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">参会咨询联系人</h3>
          <h3 class="address">王嫣 13662255195</h3>
          <h3 class="address">王聪 13554997679</h3>
        </div>
      </van-col>
      <van-col :span="spanFlex">
        <div class="margin-bootm">
          <h3 class="address">合作与媒体联系人</h3>
          <h3 class="address">陈春艳 18823370778</h3>
        </div>
      </van-col>
    </van-row>

  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    created() {
    },
    methods:{
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
      spanFlex () {
        let isWhat = this.IsPC()
        return isWhat ? 8 : 24
      }
    }
  }
</script>

<style scoped>
.address{
  font-size: .34rem;
  line-height: .8rem;
  padding: 0;
  color: #0788c6;
}
.margin-bootm{
  padding: .4rem .1rem;
}
</style>
