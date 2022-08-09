<template>
  <div class="container">
    <!-- 内容区域 -->
    <div class="content-warpper">
      <!-- 卡片 -->
      <div class="card-warpper">
        <!-- 左侧内容 -->
        <div class="left-content">
          <p class="title">
            有什么问题？
          </p>
          <p class="content">
            赶不过来了，代码写不完了，css写不完了，typescript写不完了。
            赶不过来了，代码写不完了，css写不完了，typescript写不完了。赶不过来了，代码写不完了，css写不完了，typescript写不完了。
          </p>
          <!-- 按钮组 -->
          <div class="button-gtoup">
            <el-button type="primary">1111</el-button>
          </div>
        </div>
        <!-- 右侧图表 -->
        <div class="right-graph">
          TODO: add Standard Table
        </div>
      </div>
      <!-- 卡片 -->
      <div class="card-warpper">
        <!-- 左侧内容 -->
        <div class="left-content">
          <p class="title">
            有什么问题？
          </p>
          <p class="content">
            赶不过来了，代码写不完了，css写不完了，typescript写不完了。
            赶不过来了，代码写不完了，css写不完了，typescript写不完了。赶不过来了，代码写不完了，css写不完了，typescript写不完了。

          </p>
          <!-- 按钮组 -->
          <div class="button-gtoup">
            <el-button type="primary">1111</el-button>
          </div>
        </div>
        <!-- 右侧图表 -->
        <div class="right-graph">
          TODO: add Standard Table
        </div>
      </div>
    </div>
    <!-- 底部footer -->
    <footer class="footer-warpper">
      <!-- 功能区 -->
      <div class="footer-description">
        <div class="description-container">
          <div class="card">
            <div class="imgBx">
              <img src="" alt="" />
            </div>
            <div class="content">
              <h2>标题</h2>
              <p>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
              </p>
            </div>
          </div>
          <div class="card">
            <div class="imgBx">
              <img src="" alt="" />
            </div>
            <div class="content">
              <h2>标题</h2>
              <p>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
              </p>
            </div>
          </div>
          <div class="card">
            <div class="imgBx">
              <img src="" alt="" />
            </div>
            <div class="content">
              <h2>标题</h2>
              <p>
                我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容我是内容
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- 导航 -->
      <ul class="footer-item">
        <li>资源</li>
        <li> <a href="#/struct-data" target="">知识图谱</a>
        </li>
        <li><a href="#/data-analysis" target="">数据分析</a></li>
        <li><a href="#/data-analysis" target="">机器学习</a></li>
        <li><a href="#/document" target="">文档</a></li>
      </ul>
      <ul class="footer-item">
        <li>帮助</li>
        <li>文档</li>
        <li>
          <a href="https://github.com/suanzi-yi/Struct-Data-Analyse-System.git" target="_blank">
            <svg t="1657152865382" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
              p-id="3109" height="14px">
              <path
                d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9 23.5 23.2 38.1 55.4 38.1 91v112.5c0.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"
                p-id="3110"></path>
            </svg>

            GitHub Issues</a>
        </li>
      </ul>
      <ul class="footer-item">
        <li>联系我们</li>
        <li>地址:北京市海淀区信息路48号北京体育大学</li>
        <li>电话:11111111111</li>
        <li>邮编:3306</li>
      </ul>
    </footer>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import Footer from '@/components/Footer/index.vue'

</script>
 
<style scoped lang='less'>
.container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
}

.content-warpper {
  padding: 0 4.5%;

  //卡片组件同样式
  .card() {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    height: 25%;
    min-height: 577px;
    width: 100%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12);
    background-color: #F1F2F2;
  }

  .card-warpper {

    .left-content {
      padding: 2%;
      width: 50%;
      height: 100%;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      .title {
        margin-top: 10%;
        font-size: 42px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(25, 38, 70, 1);
        vertical-align: top;
      }

      .content {
        margin: 10% auto;
        word-break: break-all;
        word-wrap: break-word;
        width: 50%;

      }

      .button-gtoup {
        margin-top: 10%;
      }
    }

    .right-graph {
      width: 50%;
    }

    //card的总css
    .card
  }
}

.footer-warpper {
  width: 100%;
  background-image: url('../../image/footer-bg.svg');
  height: 1200px;
  background-size: cover;

  display: flex;
  justify-content: space-evenly;
  background-repeat: no-repeat;
  padding-top: 0%;
  position: relative;
  margin-top: 2%;

  .footer-description {
    position: absolute;
    top: 0;
    width: 98%;

    .description-container {
      position: relative;
      height: 500px;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: nowrap;
      padding: 5px;

      //卡片组
      .card {
        margin-top: 100px;
        position: relative;
        max-width: 300px;
        height: 215px;
        background: #fff;
        margin: 30px 45px;
        padding: 20px 15px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
        transition: 0.3s ease-in-out;
        flex-direction: column;
        align-items: center;

        &:hover {
          height: 420px;
        }

        .imgBx {
          position: relative;
          width: 260px;
          height: 260px;
          top: -60px;
          z-index: 1;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);

          img {
            max-width: 100%;
            max-height: 100%;
            border-radius: 4px;
          }
        }

        .content {
          position: relative;
          margin-top: -140px;
          padding: 10px 15px;
          text-align: center;
          color: #111;
          visibility: hidden;
          opacity: 0;
          transition: 0.3s ease-in-out;
        }

        &:hover .content {
          visibility: visible;
          opacity: 1;
          margin-top: -40px;
          transition-delay: 0.3s;
        }
      }
    }
  }

  .footer-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 25%;
    padding-left: 20px;
    padding-top: 60%;

    li {

      text-align: center;
      margin: 12px 0;
      font-size: 14px;
      line-height: 1.5;
      color: #fff;

      &:first-child {
        color: #fff;
        margin-bottom: 24px;
        font-size: 16px;
        font-weight: 500;
      }

      &:hover:not(&:first-child) {
        color: #8744E1;
      }

    }

    .icon {
      fill: #697b8c;
      vertical-align: middle;
      margin-right: 2px;
    }
  }
}
</style>