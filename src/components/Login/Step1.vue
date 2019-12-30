<template>
        <div >
            <div class="list" :style="city=='请选择所属市'?{}:{color:'#333'}" @click="show=!show">
                {{city}}
                <img src="@/assets/images/login/login_bottom.png" alt="">
            </div>
            <div class="list" :style="xian=='请选择所属县（区）'?{}:{color:'#333'}" @click="show=!show">
                {{xian}}
                <img src="@/assets/images/login/login_bottom.png" alt="">
            </div>
            <div class="list" :style="userLei=='请选择用户类型'?{}:{color:'#333'}" @click="show=!show">
                {{userLei}}
                <img src="@/assets/images/login/login_bottom.png" alt="">
            </div>

            <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
        </div>
</template>

<script>
    export default {
        name: "Step1",
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
</style>