<template>
<div class="container">
  <van-divider :style="{ borderColor: '#263e64'}" class="bTitle">报名参会</van-divider>
  <div class="main">
    <form ref="myform" method="post">
      <div class="form-group">
        <label class="control-label">姓名<span style="color:red;">*</span></label>
        <div class="border">
          <van-cell-group>
            <van-field placeholder="请输入姓名" ref="uiName" v-model.trim="data.uiName" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">公司<span style="color:red;">*</span></label>
        <div class="border">
          <van-cell-group>
            <van-field placeholder="请输入公司名称" ref="uiCompany" v-model.trim="data.uiCompany" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">职位<span style="color:red;"></span></label>
        <div class="border">
          <van-cell-group>
            <van-field placeholder="请输入职位" v-model.trim="data.uiCompanyTitle" />
          </van-cell-group>
        </div>
      </div>
      <div class="form-group">
        <label class="control-label">手机<span style="color:red;">*</span></label>
        <div class="border">
          <van-cell-group>
            <van-field placeholder="请输入手机号码" ref="uiPhone" v-model.trim="data.uiPhone1" />
          </van-cell-group>
        </div>
      </div>
    </form>
    <div class="form-group">
      <van-button size="large" type="primary" @click="addInfo">提交</van-button>
    </div>
  </div>
</div>
</template>

<script>
const debug = process.env.NODE_ENV !== 'production';
export default {
  data() {
    return {
      data: {
        uiName: '', //用户
        uiCompany: '', //公司
        uiPhone1: '', //手机
        uiCompanyTitle: '', //职位
        uiExpoId: '10537' //项目ID
      }
    }
  },
  created() {

  },
  methods: {
    addInfo() {
      if (this.data.uiName == '') {
        this.$toast('姓名不能为空');
        this.$refs.uiName.focus();
        return false;
      } else if (this.data.uiCompany == '') {
        this.$toast('公司名称不能为空');
        this.$refs.uiCompany.focus();
        return false;
      } else if (this.data.uiPhone1 == '') {
        this.$toast('手机不能为空');
        this.$refs.uiPhone.focus();
        return false;
      } else {
        let toast1 = this.$toast.loading({
          mask: true,
          duration: 0,
          message: '正在提交...'
        });

        const url = debug ? '/register/insert.html' : 'http://saas.dataexpo.com.cn/SWZ/register/insert.html';
        var params = new URLSearchParams();
        params.append('uiName', this.data.uiName);
        params.append('uiCompany', this.data.uiCompany);
        params.append('uiPhone1', this.data.uiPhone1);
        params.append('uiCompanyTitle', this.data.uiCompanyTitle);
        params.append('uiExpoId', this.data.uiExpoId);
        params.append('euDefine', "官网报名");
        this.$http.post(url, params)
          .then((res) => {
            let data = res.data
            if (data.success) {
              setTimeout(() => {
                toast1.clear();
                this.$refs.myform.reset()
                this.$toast.success('报名成功');
              }, 2000)

            } else {
              this.$toast.fail('报名失败，请重试');
              toast1.clear();
            }

          })
          .catch(function(error) {
            this.$toast.fail('服务端错误，请稍后再试');
            toast1.clear();
          });
      }

    }
  },
  computed:{

  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: .32rem;
}
.van-cell-group,.van-field{
  border-radius: 4px;
}
.main {
  padding: 15px;
}
.van-button--primary {
    color: #fff;
    background-color: #36a5be;
    border: 1px solid #36a5be;
}

.control-label {
  font-size: .44rem;
  margin-bottom: 6px;
  display: inline-block;
  color: #464646;
}
.register{
  overflow-y: auto;
}
.van-cell{
  padding: .32rem .3rem;
  font-size: .4rem;
  line-height: .48rem;
}
.border{
  border: 1px solid #36a5be;
  border-radius: 4px;
}
.van-button--large{
  height: 1.2rem;
  line-height: 1.2rem;
  font-size: .46rem;
}

</style>
