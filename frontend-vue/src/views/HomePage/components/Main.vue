<template>
    <main class="main-container">
        <div class="main-content">
            <div class="content-text">
                <div class="text-title">
                    <img src="../image/logo2.png" alt="">
                    <div class="label">
                        知识图谱
                    </div>
                </div>
                <p class="text-description">
                    结构化数据查询与可视化解决方案
                </p>
                <div class="text-buttons">
                    <el-button color="#9f5fdb" round><span>快速开始</span></el-button>
                    <el-button color="#fff" round><span>概览</span></el-button>
                </div>
            </div>
        </div>
    </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'


</script>
 
<style scoped lang="less">
.main-container {
    background-image: url(https://img.alicdn.com/imgextra/i3/O1CN01t4F2fl1efn0b0K7VB_!!6000000003899-2-tps-4320-1590.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 94vh;
    max-height: 803px;
    min-height: 650px;
    overflow: hidden;
    position: relative;

    .main-content {
        height: 100%;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(100% - 80px);
        position: relative;
    }
}

.content-text {
    margin-left: 4.5%;
    position: relative;
    top: 16%;
    z-index: 1;

    .text-title {
        align-items: center;
        display: flex;
        justify-content: flex-start;
        position: relative;

        img {
            margin: 0 20px;
        }

        .label {
            font-family: PingFangSC, Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
            letter-spacing: 0;
            font-size: 3.4em;
        }
    }

    .text-description {
        display: block;
        font-size: 22px;
        font-weight: 400;
        height: 30px;
        line-height: 30px;
        margin-left: 20px;
        margin-top: 27px;
        position: relative;
        text-indent: 20px;

        &::before {
            background-color: #9f5fdb;
            content: "";
            display: block;
            height: 30px;
            left: 0;
            position: absolute;
            top: 0;
            width: 4px;
        }
    }

    .text-buttons {
        display: flex;
        margin-top: 5.56%;

        .el-button {
            width: 134px;
            height: 38px;

            &:nth-child(1) {

                span {
                    color: #fff;
                }
            }

            &:nth-child(2) {
                border: 1px solid #9f5fdb;
                span {
                    color: #9f5fdb;
                }
            }

        }
    }

}
</style>