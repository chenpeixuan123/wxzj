<template>
    <div class="RigstSelfMessage">
        <van-nav-bar title="录入个人信息" fixed left-arrow :border="false"/>
        <div class="content">
            <div class="list">
                <div>姓名<span>*</span></div>
                <div style="flex: 2">
                    <input type="text" placeholder="请输入姓名">
                </div>
            </div>
            <div class="list">
                <div>身份证号<span>*</span></div>
                <div style="flex: 2">
                    <input type="text" placeholder="请输入身份证号码">
                </div>
            </div>
            <div class="list">
                <div>家庭电话</div>
                <div style="flex: 2">
                    <input type="text" placeholder="请输入固定电话">
                </div>
            </div>
            <div class="list">
                <div>电子邮箱</div>
                <div style="flex: 2">
                    <input type="text" placeholder="请输入邮箱地址">
                </div>
            </div>
            <div class="list">
                <div>联系电话<span>*</span></div>
                <div style="flex: 2">
                    <input type="text" placeholder="请输入手机号码">
                </div>
            </div>
            <div class="list">
                <div style="flex: 0.9;">短信验证码<span>*</span></div>
                <div style="flex: 1.5">
                    <input type="text" placeholder="请输入短信验证码" style="width: 90%;">
                </div>
                <div class="yzm">获取验证码</div>
            </div>
        </div>


        <router-link :to="{name:'Storey'}" class="btn"  tag="div">下一步</router-link>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue';
    import { NavBar} from 'vant';

    Vue.use(NavBar);

    export default {
        name: 'login',
        methods: {
        }
    }
</script>
<style scoped lang="scss">
    .btn{
        width: 85%;
        margin: 60px auto 0;
        background: #4DADD5;
        color: #FCFAFA;
        font-size: 17px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
    }
    .content{
        box-sizing: border-box;
        padding: 25px 17.5px 0;
        .list{
            padding: 10px 0;
            border-bottom: 1px solid #DDDDDD;
            display: flex;
            margin-bottom: 4px;
            .yzm{
                padding: 0 2px 0 20px;
                border-left: 1px solid #C3C3C3;
                color: #F8B656;
                font-size: 14px;
            }
            &>div{
                display: flex;
                align-items: center;
                span{
                    color: #BF091A;
                }
                input{
                    width: 100%;
                    height: 100%;
                    font-size: 14px;
                    border: none;
                    text-align: right;
                    color: #333;
                    &::placeholder {
                        color:#BBB9B9;
                    }
                }
            }
            &>div:first-child{
                flex: 0.8;
                font-size: 15px;
                color: #656565;
                text-align: left;
              }

        }
    }
.RigstSelfMessage{
    padding-top: 46px;
}
</style>