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
        <!-- <div class="content-notifications">
          111
        </div> -->
        <!-- 右侧图 -->
        <div class="content-right">
          <div class="title-warpper">
            <!-- 结构化数据 -->
            <div class="title" v-if="isActivePicture == 0">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/IqREAm36K7/1.png" alt="">
              <h2>结构化数据</h2>
            </div>
            <p v-if="isActivePicture == 0">
              具有多种结构化数据与可视化方案
            </p>
            <!-- 非结构化数据 -->
            <div class="title" v-if="isActivePicture == 1">
              <img src="https://gw.alipayobjects.com/zos/antfincdn/3fG1Iqjfnz/2.png" alt="">
              <h2>非结构化数据</h2>
            </div>
            <p v-if="isActivePicture == 1">
              非结构化数据分析与可视化,机器学习
            </p>

          </div>

          <div class="imag-warpper">
            <!-- 1==>结构化数据 -->
            <div :class="['img-container', isActivePicture == 1 ? 'isActivePicture' : '']" @mouseover="hoverPicture(1)" @mouseleave="overPicture">
              <img src="../image/p1.png" alt="">
            </div>
            <!-- 0==>非结构化数据 -->
            <div :class="['img-container', isActivePicture == 0 ? 'isActivePicture' : '']"
              @mouseover="hoverPicture(0)" @mouseleave="overPicture">
              <img src="../image/p2.png" alt="">
            </div>
          </div>

        </div>
      </div>
    </section>
    <!-- 第二部分 -->
    <div>
      111
    </div>
    <!-- 第三部分 -->
  </main>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted,onUnmounted } from 'vue'
let isActivePicture = ref<number>(0)
const state = reactive<{ timeInter: string }>({
  timeInter: ''
})

onMounted(() => {
  setTimeout(state.timeInter = <any>setInterval(() => {
    if (isActivePicture.value == 0) {
      isActivePicture.value = 1
    } else {
      isActivePicture.value = 0
    }
  }, 3000), 3000)

})
onUnmounted(()=>{ 
  clearInterval(state.timeInter)
})
const hoverPicture = (value: number) => {
  isActivePicture.value = value
  clearInterval(state.timeInter)
}
const overPicture = () => {
  setTimeout(state.timeInter = <any>setInterval(() => {
    if (isActivePicture.value == 0) {
      isActivePicture.value = 1
    } else {
      isActivePicture.value = 0
    }
  }, 3000), 3000)
}
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

          &:active {
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
  // .content-notifications {
  //   bottom: 40px;
  //   display: flex;
  //   margin-left: 4.5%;
  //   position: absolute;
  //   width: 80%;
  //   z-index: 3;

  // }

  // 右侧
  .content-right {
    // bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    width: 700px;
    margin-right: 4.5%;
    padding-bottom: 140px;
    padding-top: 100px;
    position: absolute;
    right: 0;
    top: 0;

    .title-warpper {
      .title {
        display: flex;
        height: 50px;
        margin-bottom: 25px;

        img {
          display: block;
          margin-right: 10px;
          height: 100%;
        }

        // 标题文字
        h2 {
          font-size: 28px;
          font-weight: 600;
          font-family: PingFangSC, Avenir, -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
        }
      }

      p {
        display: block;
        margin-bottom: 25px;
        font-size: 18px;
      }
    }


    // 图片
    .imag-warpper {
      position: relative;
      width: 100%;
      height: 462px;

      .img-container {
        width: 100%;
        position: absolute;

        img {
          width: 100%;
        }

        &:first-child {
          top: 0px;
          left: 0px;
          z-index: 1;
        }

        &:last-child {
          top: 80px;
          left: 80px;
          z-index: 1;
        }
      }

      //激活的图片
      .isActivePicture {
        z-index: 2 !important;
      }
    }

  }
}

// 2
// 3
</style>