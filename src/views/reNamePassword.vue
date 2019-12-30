<template>
    <div class="login">
        <van-nav-bar title="重置密码" fixed left-arrow :border="false" @click-left="$router.go(-1)" />

        <div class="main">

            <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
                <input type="password" placeholder="请输入新密码">
            </div>
            <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
                <input type="password" placeholder="请输入确认密码">
            </div>
            <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
                <input type="text" placeholder="请输入短信验证码" style="width: 50%;">
                <div class="list_right">
                    <div class="yzm">
                        <span>获取验证码</span>
                    </div>
                </div>
            </div>


            <div class="btn">
                登录
            </div>

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
    .yzm{
        text-align: center;
        span{
            margin-left: 4px;
            border-radius: 9px;
            padding: 4px 11px 2px;
            color: #6DBCF5;
            border: 1px solid #6DBCF5;
        }
    }
    .btn{
        background: #4DADD5;
        color: #FCFAFA;
        font-size: 17px;
        height: 40px;
        line-height: 40px;
        border-radius: 20px;
        margin-top: 41px;
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

    }
    .van-nav-bar{
        border-bottom: 1px dashed #999;
    }
    .login{
        padding-top: 46px;
    }

</style>