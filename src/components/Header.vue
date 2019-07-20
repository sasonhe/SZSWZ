<template>
  <div class="header">
    <van-nav-bar title="2019生物展峰会" fixed @click-right="menuBar">
      <van-icon name="weapp-nav" slot="right" />
    </van-nav-bar>
    <div class="list-bar van-hairline--surround" v-show="show">
      <van-cell-group>
        <van-cell title="大会简介"/>
        <van-cell title="组织架构"/>
        <van-cell title="峰会嘉宾"/>
        <van-cell title="大会议程"/>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false,

      }
    },
    created() {

    },
    methods: {
      menuBar(){
        this.show = !this.show;
      }
    }
  }
</script>

<style scoped>
.list-bar{
  width: 120px;
  position:absolute;
  top: 50px;
  right: 6px;
  z-index: 1;
}
.van-icon{
  font-size: .6rem;
  color: #d9d9d9;
}
.van-nav-bar{
  background: #050e19;
  height: 1.2rem;
  line-height:1.2rem;
}
.van-nav-bar__title{
  color: #d9d9d9;
  font-size: .46rem;
}
.van-cell{
  background: rgba(0, 0, 0, 0.8);
  color: #d9d9d9;
  text-align: center;
}
</style>
