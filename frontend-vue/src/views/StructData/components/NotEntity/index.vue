<template>
    <div class="notentity-wapper">
        <div class="notentity-content">
            <img src="./image/404.svg" alt="">
            <p>对不起,暂未收录该实体！</p>
            <el-button type="primary" size="large" @click="toReturn">Return</el-button>
        </div>
    </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
const toReturn=()=>{
    window.scrollTo(0,0);
}

</script>
 
<style scoped lang="less">
.notentity-wapper {

    padding-bottom: 10px;
    min-height: 550px;

    .notentity-content {
        background-color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        img {
            margin-top: 25px;
            height: 550px;
            object-fit: cover;
        }

        p {
            font-size: 20px;
            font-weight: 600;
            margin: 20px 0;
        }
        .el-button{
            margin-bottom: 40px;
        }
    }
}
</style>