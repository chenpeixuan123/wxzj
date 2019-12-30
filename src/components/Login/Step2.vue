<template>
    <div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="text" placeholder="请输入用户名">
        </div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="password" placeholder="请输入密码">
        </div>
        <div class="list1" style="border-bottom: 1px solid #C3C3C3;">
            <input type="password" placeholder="请输入确认密码">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Step2"
    }
</script>

<style scoped lang="scss">
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