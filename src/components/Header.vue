<template>
  <div class="header">
    <van-nav-bar title="2019生物展峰会" fixed :z-index="11" @click-right="menuBar">
      <van-icon class="haver" name="apps-o" slot="right" />
    </van-nav-bar>
    <transition name="van-slide-down">
      <div class="list-bar" v-show="show">
        <ul class="bar-list">
          <li class="bar-item van-hairline--bottom">
            <a href="#yourid" @click="jump(0)">大会简介</a>
          </li>
          <li class="bar-item van-hairline--bottom">
            <a href="javascript:;" @click="jump(1)">组织架构</a>
          </li>
          <li class="bar-item van-hairline--bottom">
            <a href="javascript:;" @click="jump(2)">峰会嘉宾</a>
          </li>
          <li class="bar-item van-hairline--bottom">
            <a href="javascript:;">大会议程</a>
          </li>
        </ul>
      </div>
    </transition>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        show:false
      }
    },
    created() {

    },
    methods: {
      menuBar(){
        this.show = !this.show;
      },
      jump (index) {
        this.show = false;
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total = jump[index].offsetTop -60
        let distance = document.documentElement.scrollTop || document.body.scrollTop
        // 平滑滚动，时长500ms，每10ms一跳，共50跳
        let step = total / 50
        if (total > distance) {
          smoothDown()
        } else {
          let newTotal = distance - total
          step = newTotal / 50
          smoothUp()
        }
        function smoothDown () {
          if (distance < total) {
            distance += step
  　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothDown, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
        }
        function smoothUp () {
          if (distance > total) {
            distance -= step
  　　　　　　　document.body.scrollTop = distance
            document.documentElement.scrollTop = distance
            setTimeout(smoothUp, 10)
          } else {
            document.body.scrollTop = total
            document.documentElement.scrollTop = total
          }
       }
      },
    }
  }
</script>

<style scoped>
.haver{
  cursor: pointer;
}
.list-bar{
  width: 3rem;;
  position:fixed;
  top: 1.2rem;
  right: 0;
  z-index:10;
}
.bar-list{
  background: #050e19;
  background: rgba(0, 0, 0, 0.8);
}
.bar-item{
  padding: .2rem 0;
}
.bar-item a{
  display: block;
  height: .8rem;
  line-height:.8rem;
  font-size: .4rem;
  color: #d9d9d9;
  text-align: center;
  cursor: pointer;
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

</style>
