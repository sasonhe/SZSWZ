<template>
<div class="body">
  <van-image
    width="100%"
    :src="topLogo"
  />
</div>
</template>

<script>
  export default {
    data() {
      return {
        topLogo:require('@/assets/top/logo.png'),
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style scoped>
.body{
  padding-top: 1.2rem;
}
</style>
