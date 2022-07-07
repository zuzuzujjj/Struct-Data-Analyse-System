<template>
    <main class="main-container">
        <!-- 第一部分 -->
        <section class="content-warpper">
            <div class="main-content">
                <!-- 文档 -->
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
                        <el-button round><span>快速开始</span></el-button>
                        <el-button color="#fff" round><span>概览</span></el-button>
                    </div>

                </div>
                <!-- 注意事项 -->
                <div class="content-notifications">
                    111
                </div>
                <!-- 右侧图 -->
                <div class="content-right">
                    2222
                </div>
            </div>
        </section>
        <!-- 第二部分 -->
        <!-- 第三部分 -->
    </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'


</script>
 
<style scoped lang="less">
.content-warpper {
    background-image: url(https://img.alicdn.com/imgextra/i3/O1CN01t4F2fl1efn0b0K7VB_!!6000000003899-2-tps-4320-1590.png);
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    height: 94vh;
    max-height: 803px;
    min-height: 650px;
    overflow: hidden;
    position: relative;

}

// 内容区域
.main-content {
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(100% - 80px);
    position: relative;

    //文本区域
    .content-text {
        margin-left: 4.5%;
        position: relative;
        top: 20%;
        z-index: 1;

        // 标题
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
            align-items: center;
            margin-top: 5.56%;

            .el-button {
                width: 134px;
                height: 38px;

                &:nth-child(1) {
                    border: none;
                    background-image: linear-gradient(180deg, #9f5fdb, #873ecb);
                    opacity: .8;

                    &:hover {
                        opacity: 1;
                    }

                    span {
                        color: #fff;
                    }
                }

                &:nth-child(2) {
                    border: 1px solid #9f5fdb;
                    &:active{
                        background: none;
                    }
                    span {
                        color: #9f5fdb;
                    }
                }

            }
        }

    }

    // 注意事项
    .content-notifications {
        bottom: 40px;
        display: flex;
        margin-left: 4.5%;
        position: absolute;
        width: 80%;
        z-index: 3;

    }

    // 右侧
    .content-right {}
}

// 2
// 3
</style>