<template>
    <div class="RigstSelfMessage">
        <van-nav-bar title="录入个人信息" fixed left-arrow :border="false" @click-left="$router.go(-1)"/>
        <div class="content">
            <div class="list" @click="show=!show">
                <div>选择小区<span>*</span></div>
                <div style="flex: 0.9;">
                    <span>请选择</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="list" @click="show=!show">
                <div>选择楼撞<span>*</span></div>
                <div style="flex: 0.9;">
                    <span>请选择</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="list" @click="show=!show">
                <div>选择单元<span>*</span></div>
                <div style="flex:0.9;">
                    <span>请选择</span>
                    <van-icon name="arrow" />
                </div>
            </div>
            <div class="list" @click="show=!show">
                <div>选择户室<span>*</span></div>
                <div style="flex:0.9;">
                    <span>请选择</span>
                    <van-icon name="arrow" />
                </div>
            </div>
        </div>


        <div class="main">
            <h2>附件<span>*</span></h2>
            <div class="file">
                <div style="flex: 1">
                    <img src="@/assets/images/Storey/up_success.png" alt="" class="file_success">
                </div>
                <div style="flex: 4.5">
                    123.zip
                </div>
                <div style="flex: 0.5">
                    <img src="@/assets/images/Storey/up_back.png" alt="" class="file_back">
                </div>
            </div>
            <div class="file">
                <div style="flex: 1">
                    <van-uploader :after-read="afterRead" multiple v-model="fileList">
                        <img src="@/assets/images/Storey/up_before.png"   alt="" class="file_success">
                    </van-uploader>
                </div>
            </div>
        </div>
        <div class="btn">
            提交审批
        </div>
        <van-action-sheet v-model="show" :actions="actions"  @select="onSelect"  />
    </div>
</template>

<script>
    // @ is an alias to /src
    import Vue from 'vue';
    import { NavBar,Icon,Uploader } from 'vant';

    Vue.use(NavBar).use(Icon).use(Uploader );

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
                fileList:[]
            }
        },
        methods:{
            onSelect(item) {
                this.show = false;

            },
            afterRead(file){
                console.log(file)
            }
        }
    }
</script>
<style scoped lang="scss">
    .main{
        .file{
            margin-top: 16px;
            div{
                display: flex;
                align-items: center;
            }
            font-size: 15px;
            color: #BBB9B9;
            display: flex;
            .file_success{
                width: 38px;
            }
            .file_back{
                width: 21px;
            }
        }
        box-shadow: 0 0 10px #e5e5e5;
        margin: 14px 15px 0;
        box-sizing: border-box;
        padding: 15px;
        h2{
            color: #656565;
            font-size: 15px;
            text-align: left;
            span{
                color: #BF091A;
            }
        }
    }
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
            span{
                font-size: 14px;
                color: #BBB9B9;
            }
            .van-icon{
                color: #BBB9B9;
                font-size: 18px;
                margin-top: 1px;
            }
            .yzm{
                padding: 0 2px 0 20px;
                border-left: 1px solid #C3C3C3;
                color: #F8B656;
                font-size: 14px;
            }
            &>div{
                display: flex;
                align-items: center;

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
                flex: 4;
                font-size: 15px;
                color: #656565;
                text-align: left;
                span{
                    color: #BF091A;
                }
            }

        }
    }
    .RigstSelfMessage{
        padding-top: 46px;
    }
</style>