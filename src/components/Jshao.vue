<template>
  <div class="container">
    <!-- 介绍 -->
    <div class="">
      <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">聚焦生物新经济  共谋创新大湾区</van-divider>
      <!-- <h2 class="bTitle">大会简介</h2> -->
      <div class="desc">

        <p class="text-indent">作为粤港澳大湾区四大新支柱产业之一，生物技术在中国开放程度最高、经济活力最强的区域迎来巨大机遇。 2019深圳国际生物医药产业创新发展峰会致力于聚焦粤港澳大湾区生物医药产业，深度剖析新风向，探索合作新路径，解读产业新模式，培育发展新动能。</p>
        <p class="mTitle">增强产业动力  完善产业链条</p>
        <p class="text-indent">峰会以粤港澳大湾区生物医药产业创新为核心诉求，通过连接政策、资本、人才、技术等产业发展要素，旨在进一步增强生物医药产业发展动力，完善产业链条，优化产业空间布局，推动产业做大做强。</p>

        <p class="mTitle">打造千人大会  共谋产业未来</p>
        <p class="text-indent">峰会聚集了诺贝尔奖得主、海内外院士、科学家、创投机构、创新研究项目团队、500强生物医药企业，及来自各国政府监管机构、风险投资等领域的专家近千人，就医药新政、新药研发、临床研究、技术创新等领域内的新技术、新发展、新模式及国际技术转移、成果转化、金融激励等深入研讨，致力于生物医药产融结合，推动产业成果转化，共谋生物医药产业的创新未来。</p>
      </div>
    </div>
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
.desc{
  font-size: .32rem;
  color: #263e64;
  line-height: .7rem;
}
.desc p{
  margin:0;
  font-size: .32rem;
}
.mTitle{
  text-align: center;
}
</style>
