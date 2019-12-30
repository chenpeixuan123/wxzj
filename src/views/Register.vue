<template>
  <div class="register">
    <van-nav-bar title="注册" fixed left-arrow :border="false"/>

    <div class="content">
      <p><span>选择个人信息</span></p>
      <div class="stepContent">

        <div class="step">
          <div class="step_left">
            <div class="active">1</div>
            <p class="active1" style="margin-left: -6px;">选择信息</p>
          </div>
          <div class="active line"></div>
        </div>

        <div class="step">
          <div class="step_left">
            <div :class="index==2||index==3||index==4?'active':''">2</div>
            <p :class="index==2||index==3||index==4?'active1':''" style="margin-left: -6px;">填写信息</p>
          </div>
          <div :class="index==2||index==3||index==4?'active line':'line'"></div>
        </div>

        <div class="step">
          <div class="step_left">
            <div :class="index==3||index==4?'active':''">3</div>
            <p :class="index==3||index==4?'active1':''" style="margin-left: -6px;">手机验证</p>
          </div>
          <div :class="index==3||index==4?'active line':'line'"></div>
        </div>

        <div class="step" style="flex: 0;">
          <div class="step_left">
            <div :class="index==4?'active':''">4</div>
            <p :class="index==4?'active1':''" style="margin-left: 5px;">完成</p>
          </div>
        </div>


      </div>
    </div>


    <div class="main">
<!-- 第一步组件-->
      <Step1 v-show="index==1" style="margin-bottom:28px;"></Step1>
<!--第二步组件-->
      <Step2 v-show="index==2"></Step2>
<!--第三步组件-->
      <Step3 v-show="index==3"></Step3>
<!-- 第四部组件-->
      <Step4 v-show="index==4"></Step4>
      <div class="btn" @click="onClickLeft" v-show="index!=1&&index!=4">
        上一步
      </div>
      <div class="btn" style="margin-top: 15px"  @click="next" v-show="index!=4">
        下一步
      </div>
    </div>


    <div class="toLogin">已有账号，<router-link :to="{name:'Login'}" tag="span">立即登录</router-link></div>

    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
  // @ is an alias to /src
  import Vue from 'vue';
  import Step1 from '../components/Login/Step1'
  import Step2 from '../components/Login/Step2'
  import Step3 from '../components/Login/Step3'
  import Step4 from '../components/Login/Step4'
  import { Step, Steps } from 'vant';

  Vue.use(Step).use(Steps);

  export default {
    name: 'login',
    components:{
      Step1,Step2,Step3,Step4
    },
    data(){
      return{
        show: false,
        actions: [
          { name: '选项1' },
          { name: '选项2' },
          { name: '选项3' }
        ],
        city:'请选择所属市',
        userLei:'请选择用户类型',
        xian:'请选择所属县（区）',
        index:1
      }
    },
    methods: {
      onSelect(item) {
        this.show = false;
        this.userLei=item.name;
      },
      next(){
        if(this.index!=4){
          this.index++
        }
      },
      onClickLeft(){
        if(this.index!=1){
          this.index--
        }else{
          this.$router.go(-1)
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  .toLogin{
    margin-top: 200px;
    font-size: 14px;
    color: #656565;
    span{
      color: #4DADD5;
    }
    }
  .btn{
    background: #4DADD5;
    color: #FCFAFA;
    font-size: 17px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin-top: 28px;
  }
  .main{
    height: 233px;
    margin-top: 10px;
    width: 100%;
    box-sizing: border-box;
    padding: 30px 46px 0;
  }

  .content{
    box-shadow: 0 0 10px #e5e5e5;
    width: 356px;
    margin: 24px 10px 0;
    .stepContent{
      display: flex;
      padding: 21px 35px 16px;
      .step{
        .active{
          background: #4DADD5!important;
        }
        flex: 1;
        position: relative;
        .line{
          width: 90%;
          height: 5px;
          background: #DCD9D9;
          position: absolute;
          top: 24%;
          right: -10px;
        }
        .step_left{
          .active1{
            color: #4DADD5;
          }
          div{
            box-sizing: border-box;
            position: relative;
            z-index: 1;
            width: 30px;
            height: 30px;
            padding-top: 2px;
            line-height: 30px;
            text-align: center;
            font-size: 15px;
            color: #FFFCFC;
            background: #DCD9D9;
            border-radius: 50%;
          }
          p{
            font-size: 11px;
            color: #DCD9D9;
            text-align: left;
            margin-top: 6px;
          }
        }
      }
    }
    &>p{
      text-align: left;
      span{
        margin-left: 6px;
        display: inline-block;
        background: #F9B657;
        padding: 6px 11px 5px 10px;
        border-radius: 0 16px 16px 0;
        color: #FFFFFF;
        font-size: 16px;
      }
    }
  }
.register{
  padding-bottom: 20px;
  padding-top: 46px;
}
</style>