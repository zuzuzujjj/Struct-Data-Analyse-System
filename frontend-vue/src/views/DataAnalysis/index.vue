<template>
  <div class="top-container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 上传部分 -->
    <div class="upload-wapper">
      <!-- 左边 -->
      <div class="left-menus">
        <!-- 标题 -->
        <p class="animate__animated animate__fadeInDown">简单易用的实体型关系标注平台</p>
        <!-- 上传框 -->
        <div class="upload-box">
          <!-- 上传 -->
          <el-button @click="toUpoladFile">上传文件</el-button>
          <input type="file" @change="loadTextFromFile" accept=".txt, .json, .traintest" style="display: none"
            ref="uploadRef">
          <!-- 按钮 -->
          <el-button>快速使用</el-button>
        </div>
      </div>
      <!-- 右边 -->
      <div class="right-image">
        <img src="./image/right.svg" alt="">
      </div>

    </div>
  </div>
  <!-- 内容展示区 -->
  <main class="content-wapper">
    {{ fileName }}
    {{ fileContent }}
  </main>
  <!-- 底部footer -->
  <footer class="footer-warpper">

  </footer>
</template>
 
 
<script lang='ts' setup>
import Header from '@/components/Header/index.vue'
import { ref, reactive, onMounted, nextTick, watch } from 'vue'
import { useFileReader } from '@/hooks/useFileReader '
const uploadRef = ref<HTMLElement>()
//点击上传
const toUpoladFile = () => {
  uploadRef.value?.click()
}
//文本内容
let fileContent = ref<string[]>([])
//文本名字
let fileName = ref<string>()
//读取文件内容
const loadTextFromFile = (e: any) => {
  const file = e.target?.files[0];
  if (!file) return;
  fileName.value = file.name
  useFileReader(file, (r: string[]) => { fileContent.value = r })
}

</script>
 
<style scoped lang="less">
.top-container {
  background-color: #8EC5FC;
  background-image: linear-gradient(0deg, #8EC5FC 0%, #E0C3FC 50%, #ffffff 100%);
  height: 100vh;
}

.upload-wapper {
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  padding-top: 72px;
  color: #fff;
  justify-content: space-between;
  align-items: flex-start;
  overflow: hidden;
  .left-menus {
    display: flex;
    flex-direction: column;

    p {
      font-size: 44px;
      line-height: 56px;
      padding: 0 40px 40px;
      width: 535px;
      color: #fff;
      text-align: center;
    }

    .upload-box {
      display: flex;
    }
  }
  .right-image{
    height:100%;
    img{
      width:  989px;
      
      object-fit: cover;
    }
  }
}
</style>