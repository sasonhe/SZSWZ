<template>
<div class="container">
  <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">主会场议程</van-divider>
  <van-steps direction="vertical" :active="null">
    <van-step v-for="(item,index) in data" :key="index">
      <h3 class="zTitle">{{item.time}}</h3>
      <p class="nameTitle color-A" v-for="(items,i) in item.content" :key="i">{{items}}</p>
      <div>
        <p class="nameTitle  color-B" v-for="(gust,ides) in item.gust" :key="ides">{{gust}}</p>
      </div>
    </van-step>
  </van-steps>
</div>
</template>

<script>
export default {
  data() {
    return {
      data:[
        {
          id:1,
          time:'09:00-09:30',
          content:["嘉宾签到","播放暖场宣传片"],
          gust:[]
        },
        {
          id:2,
          time:'09:30-09:55',
          content:['领导致辞'],
          gust:["国家卫健委领导","市领导","区领导"]
        },
        {
          id:3,
          time:'09:55-10:10',
          content:["项目签约仪式","深圳市粤港澳科技创新发展联盟启动仪式"],
          gust:["（具体形式待定）"]
        },
        {
          id:4,
          time:'10:10-10:25',
          content:["主旨演讲（一）","全球生物科技发展状况及趋势"],
          gust:["Aaron Ciechanover教授","2004 年诺贝尔奖化学奖得主"]
        },
        {
          id:5,
          time:'10:25-10:35',
          content:["主旨演讲（二）","主题待定"],
          gust:["李青","国家卫生健康委医药卫生科技发展研究中心主任"]
        },
        {
          id:6,
          time:'10:35-10:45',
          content:["主旨演讲（三）","粤港澳大湾区深港联动的机遇"],
          gust:["谭铁牛", "香港中联办副主任，中国科学院院士，英国皇家工程院外籍院士"]
        },
        {
          id:7,
          time:'10:45-11:35',
          content:["校长论坛","中国生命科学和创新科技发展"],
          gust:["1、施一公", "中国科学院院士，美国国家科学院院士，西湖大学校长","2、詹启敏","中国科学院院士, 北京大学深圳研究院院长","3、卢煜明","香港中文大学医学院副院长，美国科学院外籍院士","4、徐扬生","中国工程院院士，香港中文大学（深圳）校长","5、卫炳江","香港理工大学副校长","6、饶毅","首都医科大学校长（拟）","7、刘良","澳门科技大学校长（拟）"]
        },
        {
          id:8,
          time:'11:35-12:35',
          content:["主题讨论（一）","粤港澳生物医药产业创新合作区如何创新驱动发展（政策、人才、临床、标准等）"],
          gust:["1、曹京华","中科院香港创新院筹建组联合组长，一带一路科学组织联盟秘书处执行主任","2、姚毅","前美国FDA资深临床审批官","3、钟伟强","香港创新及科技局副局长","4、宋瑞霖","中国医药创新促进会会长","5、邱宣","深圳科创委党组书记","6、陈华平","坪山区副区长（拟主持）","7、Stine Kirstein Junge","联合国开发计划署北欧代表办公室","可持续发展目标加速器倡议负责人"]
        },
        {
          id:9,
          time:'12:35-14:30',
          content:["午餐、自由交流"],
          gust:[]
        },
        {
          id:10,
          time:'14:30-16:00',
          content:["主题讨论（二）","1、中国生物科技公司走向全球化","2、粤港澳大湾区与创新驱动下的成果转化"],
          gust:["1、王晓东 美国国家科学院院士，北京生命科学研究所所长","2、李小加 香港交易所行政总裁","3、阙波 上海证券交易所副总经理","4、鲁先平 深圳微芯生物科技有限公司董事、总裁兼首席科学官","5、田源 元明资本董事长（拟主持）","6、Nisa Leung（梁颖宇） 启明创投主管合伙人"]
        },
        {
          id:11,
          time:'16:00-17:30',
          content:["主题讨论（三）","科技创新与医学进步：新兴信息技术对生物医药产业的推动"],
          gust:["1、Jean-Pierre CAZENAVE（吉恩·皮埃尔·卡泽纳夫）法国国家医学科学院院士","2、卢毓琳 香港生物医药创新协会会长，香港科技大学荣誉院士","3、胡章宏 大湾区共同家园投资有限公司总裁","4、Simon Kos 微软全球健康部首席医学官","5、袁庆 万乐药业总经理（拟主持）","6、罗飞 H50轮值主席，松禾资本董事长","7、Sharon Chan 强生JLABS上海负责人"]
        },
        {
          id:12,
          time:'17:30-18:00',
          content:["自由交流"],
          gust:[]
        }
      ],

    }
  },
  created() {},
  methods: {},

}
</script>

<style scoped>
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
  line-height: .68rem;
  margin-top: 8px;
  margin-bottom: 8px
}
.van-steps--vertical {
  padding: 0 0 0 24px;
}
.color-A{
  color: #0788c6;
}
.color-B{
  color: #2ebafe;
}
</style>
