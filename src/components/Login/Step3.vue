<template>
    <div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="number" placeholder="请输入联系电话">
        </div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="text" placeholder="请输入短信验证码" style="width: 50%;">
            <div class="list_right">
                <div class="yzm">
                    <span>获取验证码</span>
                </div>
            </div>
        </div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="text" placeholder="请输入验证码" style="width: 50%;">
            <div class="list_right">
                <div>
                    <img src="@/assets/images/login/wem.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Step3"
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
</style>