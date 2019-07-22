<template>
<div class="container">
  <div v-for="(name,n) in fenData" :key="n" class="d_jump">
    <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">{{name.name}}</van-divider>
    <div class="flex fenTitle" v-for="(title,nd) in name.title" :key="nd">
      <div class="item-flex-left timeTitle">{{title | left(title)}}</div>
      <div class="item-flex-right timeTitle">{{title | right(title)}}</div>
    </div>
    <van-steps direction="vertical" :active="null">
      <van-step v-for="(item,index) in name.main" :key="index">
        <h3 class="zTitle">{{item.time}}</h3>
        <p class="nameTitle color-B" v-for="(items,i) in item.dev" :key="i">{{items}}</p>
      </van-step>
    </van-steps>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      data1:{
        id:1,
        name:"分会场 ( 一 )",
        title:["“生物医药/医疗器械”项目路演","智慧医疗、精准医学、生物制药","投壶网、E99联盟","约100人"],
        main:[
          {
            time:"14:00-14:10",
            dev:["主办方致欢迎辞"]
          },
          {
            time:"14:10-14:30",
            dev:["1、主题分享：","全球科技创新下的中国生物医药产业","2、拟邀嘉宾：","仙瞳资本董事长 刘牧龙","倚锋资本创始人 朱晋桥","融昱资本业务合伙人 张颢腾"]
          },
          {
            time:"14:30-15:30",
            dev:["1、项目路演：","生物制药及智慧医疗项目路演（4-6个项目）","2、拟邀请项目：","一、天辰医疗","二、恩多克医疗","三、贝美药业","四、天蓝生物"]
          },
          {
            time:"15:30-15:40",
            dev:["项目点评","拟邀嘉宾：","瑞享源基金创始合伙人肖卫民","青橙资本合伙人 张云鹏","融昱资本业务合伙人张颢腾","倍数资本创始合伙人 王阳","国科嘉和投资总监 钟靖","仙瞳资本投资总监 孙洪源","倚锋资本董事总经理 雒法涌","澳银资本投资总监 张亦笑"]
          },
          {
            time:"15:40-16:00",
            dev:["1、主题分享：","精准医学与生物技术创新","2、拟邀嘉宾：","深圳瑞享源基金创始合伙人 肖卫民","深圳市因诺转化医学研究院执行院长 王明军"]
          },
          {
            time:"16:00-17:00",
            dev:["1、项目路演：","国际精准医学项目路演（4个项目）","2、拟邀请项目：","五、力泰克科技","六、睿瀚医疗","七、深伦生物","八、臻质医疗"]
          },
          {
            time:"17:00-17:10",
            dev:["项目点评"]
          }
        ]
      },
      fenData:[
        {
          id:1,
          name:"分会场 ( 一 )",
          title:["主题：“生物医药/医疗器械”项目路演","领域：智慧医疗、精准医学、生物制药","承办单位：投壶网、E99联盟","规模：约100人"],
          main:[
            {
              time:"14:00-14:10",
              dev:["主办方致欢迎辞"]
            },
            {
              time:"14:10-14:30",
              dev:["1、主题分享：","全球科技创新下的中国生物医药产业","2、拟邀嘉宾：","仙瞳资本董事长 刘牧龙","倚锋资本创始人 朱晋桥","融昱资本业务合伙人 张颢腾"]
            },
            {
              time:"14:30-15:30",
              dev:["1、项目路演：","生物制药及智慧医疗项目路演（4-6个项目）","2、拟邀请项目：","一、天辰医疗","二、恩多克医疗","三、贝美药业","四、天蓝生物"]
            },
            {
              time:"15:30-15:40",
              dev:["项目点评","拟邀嘉宾：","瑞享源基金创始合伙人肖卫民","青橙资本合伙人 张云鹏","融昱资本业务合伙人张颢腾","倍数资本创始合伙人 王阳","国科嘉和投资总监 钟靖","仙瞳资本投资总监 孙洪源","倚锋资本董事总经理 雒法涌","澳银资本投资总监 张亦笑"]
            },
            {
              time:"15:40-16:00",
              dev:["1、主题分享：","精准医学与生物技术创新","2、拟邀嘉宾：","深圳瑞享源基金创始合伙人 肖卫民","深圳市因诺转化医学研究院执行院长 王明军"]
            },
            {
              time:"16:00-17:00",
              dev:["1、项目路演：","国际精准医学项目路演（4个项目）","2、拟邀请项目：","五、力泰克科技","六、睿瀚医疗","七、深伦生物","八、臻质医疗"]
            },
            {
              time:"17:00-17:10",
              dev:["项目点评"]
            }
          ]
        },
        {
          id:2,
          name:"分会场 ( 二 )",
          title:["主题：“妇幼健康与大生殖”产业论坛","领域：医学影像、体外诊断、健康管理","承办单位：邦勤资本","规模：约200人"],
          main:[
            {
              time:"09:30-09:50",
              dev:["签到、入场"]
            },
            {
              time:"09:50-10:00",
              dev:["主办方致欢迎辞，并介绍嘉宾"]
            },
            {
              time:"10:00-10:20",
              dev:["专题报告","蒋庄德 中国工程院院士"]
            },
            {
              time:"10:20-10:40",
              dev:["专题报告","韩小红 慈铭健康集团总裁"]
            },
            {
              time:"10:40-11:00",
              dev:["茶歇/自由交流"]
            },
            {
              time:"11:00-11:20",
              dev:["专题报告","陈再宏 宁波戴维医疗器械股份有限公司董事长"]
            },
            {
              time:"11:20-11:40",
              dev:["专题报告","李焕昌 深圳市昌红科技股份有限公司董事长"]
            },
            {
              time:"11:40-12:00",
              dev:["专题报告","任海萍 中国食品药品检定研究院主任"]
            },
            {
              time:"12:00-14:00",
              dev:["午宴"]
            },
            {
              time:"14:00-14:20",
              dev:["主题演讲","彭年才 西安天隆科技有限公司董事长"]
            },
            {
              time:"14:20-14:40",
              dev:["主题演讲","张海川 赛雷纳(中国)医疗科技有限公司创始人"]
            },
            {
              time:"14:40-15:00",
              dev:["主题演讲","张崧 深圳达盟生物科技有限公司创始人"]
            },
            {
              time:"15:00-15:20",
              dev:["主题演讲","刘湘娟 力盟生命科技(深圳)有限公司创始人"]
            },
            {
              time:"15:20-15:40",
              dev:["茶歇/自由交流"]
            },
            {
              time:"15:40-16:00",
              dev:["主题演讲","牛会甫 深圳恩多克医疗有限公司创始人"]
            },
            {
              time:"16:00-16:20",
              dev:["主题演讲","于琴 深圳市辰纳生物科技有限公司创始人"]
            },
            {
              time:"16:20-16:40",
              dev:["主题演讲","刘畅 深圳市凯沃尔电子有限公司总经理"]
            },
            {
              time:"16:40-17:00",
              dev:["主题演讲","王成 深圳市科瑞康实业有限公司总经理"]
            },
            {
              time:"17:00-17:20",
              dev:["主持人总结"]
            },
          ]
        },
        {
          id:3,
          name:"分会场 ( 三 )",
          title:["主题：生物医药产业研发转化研讨会","领域：生物医药","承办单位：深圳市生物医药促进会、广东医谷、坪山生物医药研发转化中心","规模：约100人"],
          main:[
            {
              time:"14:00-14:10",
              dev:["主办方致欢迎辞，并介绍嘉宾"]
            },
            {
              time:"14:10-14:40",
              dev:["政府领导发言（2位）"]
            },
            {
              time:"14:40-14:55",
              dev:["主题分享","韩忠朝 法国国家医学科学院院士"]
            },
            {
              time:"14:55-15:10",
              dev:["主题分享","李志成 香港浸会大学教授，香港浸会大学深圳研究院副院长"]
            },
            {
              time:"15:10-15:25",
              dev:["主题分享","孙飞 香港科技大学教授"]
            },
            {
              time:"15:25-15:40",
              dev:["主题分享","李笑宇 香港大学教授"]
            },
            {
              time:"15:40-15:55",
              dev:["茶歇"]
            },
            {
              time:"15:55-16:10",
              dev:["主题分享","夏江 香港中文大学生命科学学院教授"]
            },
            {
              time:"16:10-16:25",
              dev:["主题分享","罗茜 澳门大学健康科学学院教授"]
            },
            {
              time:"16:25-16:40",
              dev:["主题分享","李子刚 北京大学深圳研究生院化学生物学与生物技术学院课题组组长、特聘研究员"]
            },
            {
              time:"16:40-16:55",
              dev:["主题分享","黄韶辉 中科院生物物理研究所研究员、课题组长，广东中科奥辉科技有限公司执行董事"]
            },
            {
              time:"16:55-17:10",
              dev:["主题分享","王国新 深圳清华大学研究院等离子体纳米生物芯片中心副主任"]
            },
            {
              time:"17:10-17:40",
              dev:["提问探讨"]
            },
            {
              time:"17:40-18:00",
              dev:["自由交流、项目对接"]
            }
          ]
        },
      ]
    }
  },
  created() {},
  methods: {},
  filters:{
    left(value,n){
      let arr = value.split('：');
      return arr[0]
    },
    right(value,n){
      let arr = value.split('：');
      return arr[1]
    }
  }
}
</script>

<style scoped>
.fenTitle .timeTitle{
  font-size: .4rem;
  font-weight: 600;
  color: #0788c6;
  padding-bottom: .2rem;
}
.van-steps{
  background-color: #0c3d8a !important;
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
</style>
