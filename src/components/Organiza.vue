<template>
  <div class="organiza container">
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">组织架构</van-divider>
    <div class="">
      <h2 class="topTitle">主办单位：</h2>
      <p class="msTitle">深圳市坪山区人民政府</p>
      <p class="msTitle">中国国际贸易促进委员会深圳市委员会</p>
    </div>
    <van-row>
      <van-col span="12">
        <h2 class="topTitle">主办单位：</h2>
        <p class="msTitle">深圳市坪山区人民政府</p>
        <p class="msTitle">中国国际贸易促进委员会深圳市委员会</p>
      </van-col>
      <van-col span="12">
        <h2 class="topTitle">主办单位：</h2>
        <p class="msTitle">深圳市坪山区人民政府</p>
        <p class="msTitle">中国国际贸易促进委员会深圳市委员会</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>

export default {
  data () {
    return {

    }
  },
  components:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topTitle{
  font-size: .46rem;
  color: #263e64;
}
.msTitle{
  font-size: .34rem;
  color: #263e64;
  font-weight: 600;
  line-height: .68rem;
}
</style>
