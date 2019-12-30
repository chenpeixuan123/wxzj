<template>
  <div class="login">
    <van-nav-bar title="登录" fixed  :border="false"/>
    <div class="login_img">
      <img src="@/assets/images/login/login.png">
    </div>
    <div class="main">
      <div class="list" :style="userLei=='请选择用户类型'?{}:{color:'#000'}" @click="show=!show">
          {{userLei}}
        <img src="@/assets/images/login/login_bottom.png" alt="">
      </div>
      <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
        <input type="text" placeholder="请输入用户名">
      </div>
      <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
        <input type="password" placeholder="请输入密码">
      </div>
      <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
        <input type="text" placeholder="请输入验证码" style="width: 50%;">
        <div class="list_right">
          <div>
            <img src="@/assets/images/login/wem.png" alt="">
          </div>
        </div>
      </div>

      <router-link :to="{name:'reNamePassword'}" class="fogetPassword" tag="p">忘记密码?</router-link>

      <div class="btn">
        登录
      </div>

    </div>
    <div class="fgx" >
      <van-divider dashed :style="{ color: '#BBB9B9', borderColor: '#1989fa', padding: '0 16px',marginTop:'70px' }">
        没有账号，<router-link :to="{name:'Register'}" tag="span">立即注册</router-link>
      </van-divider>
    </div>

    <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
  </div>
</template>

<script>
// @ is an alias to /src
import Vue from 'vue';
import { NavBar,Divider,ActionSheet  } from 'vant';

Vue.use(NavBar);Vue.use(ActionSheet);Vue.use(Divider);

export default {
  name: 'login',
  data(){
    return{
      show: false,
      actions: [
        { name: '选项1' },
        { name: '选项2' },
        { name: '选项3' }
      ],
      userLei:'请选择用户类型'
    }
  },
  methods: {
    onSelect(item) {
      this.show = false;
      this.userLei=item.name;
    }
  }
}
</script>
<style scoped lang="scss">
  .fgx{
    width: 85%;
    margin: 0 auto;
    span{
      color: #6DBCF5;
    }
  }
  .btn{
    background: #4DADD5;
    color: #FCFAFA;
    font-size: 17px;
    height: 40px;
    line-height: 40px;
    border-radius: 20px;
    margin-top: 16px;
  }
  .fogetPassword{
    padding-right: 13px;
    font-size: 14px;
    color: #BBB9B9;
    text-align: right;
  }
  .main{
    box-sizing: border-box;
    padding: 40px 44px 0;
    .list1{
      input{
        width: 100%;
        border: none;
        &::placeholder {
          color:#BBB9B9;
        }
      }
      margin-bottom: 11px;
      height: 36px;
      color: #666;
      font-size: 14px;
      text-align: left;
      line-height: 36px;
      padding: 0 0 0 5px;
      .list_right{
        border-left: 1px solid #C3C3C3;
        float: right;
        width: 116px;
        height: 26px;
        div{
          height: 100%;
        }
        img{
          width: 96px;
          height: 26px;
          margin-left: 14px;
          border-radius: 10px;
        }
      }
    }
    .list{
      border: 1px solid #C3C3C3;
      position: relative;
      margin-bottom: 10px;
      height: 28px;
      line-height: 28px;
      color: #BBB9B9;
      font-size: 14px;
      text-align: left;
      padding: 5px 0 0 5px;
      img{
        margin-top: -5px;
        width: 24px;
        float: right;
      }
    }
  }
  .van-nav-bar{
    border-bottom: 1px dashed #999;
  }
.login{
  padding-top: 46px;
}
.login_img{
  box-sizing: border-box;

  width: 100%;
  img{
    width: 100%;
    height: 211px;
  }
}
</style>