<template>
  <div class="organiza container">
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">组织架构</van-divider>
    <div class="wrapper clearfix">
      <van-row>
        <van-col :span="spanFlex">
          <div class="item-list van-hairline--surround">
            <h2 class="topTitle">主办单位：</h2>
            <p class="msTitle">深圳市坪山区人民政府</p>
            <p class="msTitle">中国国际贸易促进委员会深圳市委员会</p>
          </div>
        </van-col>
        <van-col :span="spanFlex">
          <div class="item-list van-hairline--surround">
            <h2 class="topTitle">承办单位：</h2>
            <p class="msTitle">深圳市坪山区投资推广服务署</p>
            <p class="msTitle">深圳市坪山区工业和信息化局</p>
            <p class="msTitle">深圳市坪山区科技创新局</p>
            <p class="msTitle">深圳国际商会</p>
          </div>
        </van-col>
      </van-row>
    </div>

    <div class="wrapper clearfix">
      <van-row>
        <van-col :span="spanFlex">
          <div class="item-list van-hairline--surround">
            <h2 class="topTitle">支持单位：</h2>
            <p class="msTitle">中国科协生命科学学会联合体</p>
            <p class="msTitle">香港交易所</p>
          </div>
        </van-col>
        <van-col :span="spanFlex">
          <div class="item-list van-hairline--surround">
            <h2 class="topTitle">合作单位：</h2>
            <div class="clearfix">
              <van-row>
                <van-col :span="spanFlex">
                  <p class="msTitle">中国国际商会</p>
                  <p class="msTitle">中国医药创新促进会</p>
                  <p class="msTitle">药渡网</p>
                  <p class="msTitle">邦勤资本</p>
                  <p class="msTitle">广东医谷</p>
                  <p class="msTitle">香港生物医药创新协会</p>
                </van-col>
                <van-col :span="spanFlex">
                  <p class="msTitle">深圳市医药行业协会</p>
                  <p class="msTitle">深圳市生物医药促进会</p>
                  <p class="msTitle">全景网</p>
                  <p class="msTitle">投壶网</p>
                  <p class="msTitle">元明资本</p>
                </van-col>
              </van-row>
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
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
      return isWhat ? 12 : 24
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrapper{
  margin-bottom:.46rem;
}
.topTitle{
  font-size: .46rem;
  color: #263e64;
  margin-bottom: .2rem;
}
.msTitle{
  font-size: .36rem;
  color: #263e64;
  font-weight: 600;
  line-height: .68rem;
}
.item-list{
  margin: 0.2rem;
  padding: .2rem;
}


</style>
