<template>
<div class="container">
  <van-tabs class="tab backgroundColor" v-model="active" animated swipeable :border="false"  background="#d2e2f2" color="#0788c6" title-inactive-color="#04183b" title-active-color="#0788c6" line-width="50%">
    <van-tab  title="2017年">
      <div style="padding:.4rem 0">
        <History2017/>
      </div>
    </van-tab>
    <van-tab  title="2018年">
      <div style="padding:.4rem 0">
        <History2018/>
      </div>
    </van-tab>
  </van-tabs>

</div>
</template>

<script>
import History2017 from '@/components/history-2017';
import History2018 from '@/components/history-2018';
export default {
  data() {
    return {
      active:0
    }
  },
  components:{
    History2017,History2018
  }
}
</script>

<style>
.van-tabs--line .van-tabs__wrap{
  height: .88rem
}
.van-tab{
  font-size: .34rem;
  font-weight: bold;
  line-height: .88rem;
}
.backgroundColor .van-tabs__content{
  margin-top: .4rem;
  border-radius: 10px;
  background: #d2e2f2;
}
.fenTitle .timeTitle{
  font-size: .4rem;
  font-weight: 600;
  color: #0788c6;
  padding-bottom: .2rem;
}
.van-steps{
  background-color: rgba(0,0,0,0) !important;
}
.zTitle{
  display: inline-block;
  color: #fff;
  font-size: .34rem;
  font-weight: bold;
  text-align: center;
  padding: 0 10px;
  height: .68rem;
  line-height: .68rem;
  background: #0788c6;
  border-radius: 12px;
}
.nameTitle{
  font-size: .36rem;
  font-weight: bold;
  line-height: .46rem;
  margin-top: 8px;
  margin-bottom: 8px
}
.van-steps--vertical {
  padding: 0 0 0 24px;
}
.color-A{
  color: #ffffff;
}
.color-B{
  color: #2ebafe;
}
.flex {
  display: flex;
}
.flex .item-flex-left {
  padding-right: .34rem;
  flex: 2rem 0 0;
  text-align: justify;
  -moz-text-align-last: justify;
  -webkit-text-align-last: justify;
  text-align-last: justify;
}
.flex .item-flex-right {
  flex: 1;
}
.color-A{
  color: #0788c6;
}
.color-B{
  color: #2ebafe;
}
</style>
