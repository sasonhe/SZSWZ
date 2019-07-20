<template>
  <div class="steps">
    <van-steps direction="vertical" :active="0" active-icon="like" active-color="#00aeff">
      <van-step>
        <h3>大会简介</h3>
      </van-step>
      <van-step>
        <h3>组织架构</h3>
      </van-step>
      <van-step>
        <h3>峰会嘉宾</h3>
      </van-step>
      <van-step>
        <h3>大会议程</h3>
      </van-step>
    </van-steps>
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
    methods: {
    }
  }
</script>

<style scoped>
.steps{
  position: fixed;
  right: 50px;
  top:30%;
  width: 130px;
}
.van-steps {
    overflow: hidden;
    background-color: rgba(0,0,0,0.6);
}
.van-step{
  color: #fff;
}
</style>
