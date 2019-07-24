<template>
  <div class="header">
    <div class="mHeader" v-if="!showHeader">
      <van-nav-bar title="2019国际生物医药产业创新展峰会" fixed :z-index="11" @click-right="menuBar">
        <van-icon class="haver" name="apps-o" slot="right" />
      </van-nav-bar>
      <transition name="van-slide-down">
        <div class="list-bar" v-show="show" style="max-height:10rem;overflow-y: scroll;">
          <ul class="bar-list">
            <li class="bar-item van-hairline--bottom" v-for="(item,index) in json" :key="index">
              <a href="javascript:;" @click="jump(index)">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </transition>
    </div>
    <div class="pHeader" v-if="showHeader">
      <div class="container" style="padding:0;">
        <van-row>
          <van-col span="6">
            <h1 class="Ptitle">2019国际生物医药产业创新展峰会</h1>
          </van-col>
          <van-col span="18">
            <div class="item-header">
              <ul class="bar-list-p">
                <li class="bar-item-p" v-for="(item,index) in topBar" :key="index">
                  <a href="javascript:;" @click="jump(index)">{{item.name}}</a>
                </li>
              </ul>
              <div class="more" @mouseover="showMore()">
                <span class="more-text" @mouseout="hideMore()">更多<van-icon class="absolute" name="arrow-down" /></span>
                <div class="list-bar" v-show="pcMore" @mouseout="hideMore()">
                  <ul class="bar-list">
                    <li class="bar-item van-hairline--bottom" v-for="(item,index) in json" :key="index">
                      <a href="javascript:;" @click="jump(index)">{{item.name}}</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        pcMore:false,
        show:false,
        showHeader:true,
        topBar:[
          {
            id:0,
            name:'大会简介'
          },
          {
            id:1,
            name:'组织架构'
          },
          {
            id:2,
            name:'峰会嘉宾'
          },
          {
            id:3,
            name:'峰会议程'
          }
        ],
        json:[
          {
            id:0,
            name:'大会简介'
          },
          {
            id:1,
            name:'组织架构'
          },
          {
            id:2,
            name:'峰会嘉宾'
          },
          {
            id:3,
            name:'峰会议程'
          },
          {
            id:5,
            name:'往届嘉宾'
          },
          {
            id:6,
            name:'报名参会'
          },
          {
            id:7,
            name:'合作媒体'
          },
          {
            id:8,
            name:'联系我们'
          }
        ]
      }
    },
    created() {
      let isWhat = this.IsPC();
      if(isWhat){
        this.showHeader = true;
      }else{
        this.showHeader = false;
      }
    },
    methods: {
      hideMore(){
        this.pcMore = false;
      },
      showMore(){
        this.pcMore = true
      },
      // 判断PC
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
      },
      menuBar(){
        this.show = !this.show;
      },
      jump (index) {
        this.show = false;
        // 用 class="d_jump" 添加锚点
        let jump = document.querySelectorAll('.d_jump')
        let total = jump[index].offsetTop -80
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
.van-nav-bar__title{
  max-width:80%;
}
.pHeader{
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
  position:fixed;
  top: 0;
  z-index:10;
  background: #04183b;
  color: #fff;
}
.Ptitle{
  font-size: .34rem;
  font-weight: 400;
  color: #d6aeaa;
}
.haver{
  cursor: pointer;
  padding: .2rem;
  font-size: .34rem
}
.list-bar{
  width: 3rem;;
  position:fixed;
  top: 1.2rem;
  right: 0;
  z-index:10;
}
.bar-list{
  background: #36a5be;
  background: rgba(54, 165, 190, .8);
}
.bar-item{
  padding: .1rem 0;
}
.bar-item a{
  display: block;
  height: .8rem;
  line-height:.8rem;
  font-size: .34rem;
  color: #fff;
  text-align: center;
  cursor: pointer;
}
.item-header{
  text-align: right;
}
.item-header .bar-list-p{
  display: inline-block;
}
.bar-item-p{
  display: inline-block;
  padding:0 .2rem;
}
.bar-item-p a{
  height: .8rem;
  line-height:.8rem;
  font-size: .34rem;
  color: #d6aeaa;
  cursor: pointer;
}
.bar-item-p a:hover,.bar-item a:hover{
  color: #fdc9c4;
}
.van-icon{
  font-size: .48rem;
  color: #FFF;
}
.van-nav-bar{
  background: #36a5be;
  height: 1.2rem;
  line-height:1.2rem;
}
.van-nav-bar__title{
  color: #FFF;
  font-size: .46rem;
}
.more{
  display: inline-block;
  position: relative;
}
.more-text{
  display: block;
  position: relative;
  cursor: pointer;
  font-size: .36rem;
  color: #d6aeaa;
  text-align: left;
  width: 60px;
}
.more-text:hover{
  color: #fdc9c4;
}
.absolute{
  position: absolute;
  top: 25px;
  right: -6px;
  color: #d6aeaa;
}
.more .list-bar{
  position: absolute;
  right: -50px;
  z-index: 1;
}
.more .bar-list{
  background: #36a5be;
  background: rgba(4, 24, 59, 0.8);
}
.more .bar-item a{
  color: #d6aeaa;
}
.more .bar-item a:hover{
  color: #fdc9c4;
}
</style>
