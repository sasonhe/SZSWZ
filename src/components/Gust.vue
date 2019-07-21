<template>
  <div class="organiza container" >
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">峰会嘉宾</van-divider>
    <div class="guList" v-for="(item,index) in selectJson" :key="index">
      <div class="guwrap">
        <van-row type="flex" justify="space-around" style="margin-bottom:.4rem;">
          <van-col span="8" v-for="(items,i) in item.main" :key="items.id">
            <div class="item" @click="toggleText(items,items.id,item.index)" :class="{ active: items.active }">
              <div class="top" >
                <van-image width="100%" :src="'./static/images/'+items.id+'.jpg'"/>
              </div>
              <div class="main">
                <h3 class="name">{{items.name}}</h3>
                <p class="text">{{items.title}}</p>
              </div>
              <div class="bottom"><van-icon name="arrow-down" /></div>
            </div>
          </van-col>
        </van-row>
        <!-- <transition-group name="van-fade">
          <div class="text-content" v-for="(items,i) in item.main" :key="items.id" v-show="items.active">
            <h3 class="c-title">{{items.name}}</h3>
            <p class="c-mtitle">{{items.title}}</p>
            <div class="t-m" v-html="items.desc"></div>
          </div>
        </transition-group> -->
        <div class="text-content" v-for="(items,i) in item.main" :key="items.id" v-show="items.active">
          <h3 class="c-title">{{items.name}}</h3>
          <p class="c-mtitle">{{items.title}}</p>
          <div class="t-m" v-html="items.desc"></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
  import Vue from 'vue';
  export default {
    data() {
      return {
        img1:require('@/assets/images/1/1.jpg'),
        textShow:false,
        isChoose:'',
        json:require('../../static/gust.json'),
        jsonPC:require('../../static/PC.json'),
        selectJson:[],
        text:{}
      }
    },
    created() {
      let isWhat = this.IsPC()
      if(isWhat){//PC 5条一行
        this.selectJson = this.jsonPC
      }else{//Moblie 3条一行
        this.selectJson = this.json
      }
    },
    methods: {
      toggleText(item,id,index){
        this.selectJson.map((arr) => {
          arr.main.filter((items) => {
            if (items.id === id) {
              items.active = !item.active;
              // this.text = items
            }else{
              items.active = false;
            }
          })
        })

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
      }
    }
  }
</script>

<style scoped>

.organiza{
  padding: .6rem 5px;
}
.item{
  /* display: inline-block; */
  /* max-width: 4.6rem; */
  min-width: 3.1rem;
  height: 6.1rem;
  margin: 0 .1rem;
  text-align: center;
  position: relative;
  vertical-align: top;
  background: #fff;
  box-shadow: 0 10px 20px #bfd1e6;
}
.item.active{
  top:-0.4rem;
  box-shadow: 0 0.1rem 0.2rem #8da5e0;
}
.top{
  width: 2.6rem;
  height: 3rem;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  top: -0.4rem;
}
.bottom{
  position: absolute;
  bottom: 0;
  width: 100%;
}
.name{
  color: #3868bf;
  font-size: .46rem;
  font-weight: bold;
  padding-bottom: .2rem;
  /* line-height: .8rem;
  height: .8rem; */
}
.text{
  font-size: .34rem;
  color: #1d284e;
  line-height: .5rem;
  /* height: 1.2rem; */
  text-align: justify;
  padding: 0 .2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  font-weight: bold;
}
.text-content{
  padding: .2rem;
  border: 1px solid #ddd;
  background: #fff;
  text-align: left;


}
.text-content.hiClass{
  opacity: 1;
  transition: all 2s;
}
.c-title{
  font-size: 0.46rem;
  color: #3858bf;
  padding: .22rem 0;
}
.c-mtitle{
  font-size: 0.4rem;
  color: #3858bf;
  word-break: break-word;
}
.t-m{
  text-indent: 2em;
  font-size: 0.4rem;
  color: #1c336f;
  margin-top: 0.3rem;
  line-height: 0.6rem;
  word-break: break-word;
  text-align: justify;
}
.van-icon{
  font-weight: bold;
  font-size: .46rem;
}
.guwrap{
  padding-top:1rem;
  text-align: center;
}
.item:hover{
  cursor: pointer;
}
.fades-enter-active,
.fades-leave-active {
  transition: all 0.5s;
}
.fades-enter,
.fades-leave-to {
  height: 0;
}
</style>
