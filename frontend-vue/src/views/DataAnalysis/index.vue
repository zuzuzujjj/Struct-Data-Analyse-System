<template>
  <div class="top-container">
    <!-- 头部 -->
    <Header></Header>
    <div class="upload-wapper">
      <!-- 背景标题 -->
      <p class="animate__animated animate__fadeInDown">简单易用的实体型关系标注平台</p>
      <!-- 上传框 -->
      <div class="upload-box">
        <FileUpload ref="uploadComponentRef"></FileUpload>
        <el-button>快速使用</el-button>
      </div>
    </div>
  </div>
  <!-- 内容展示区 -->
  <main class="content-wapper">
    {{ uploadComponentRef?.fileName }}
    {{ uploadComponentRef?.fileContent }}
  </main>
  <!-- 底部footer -->
  <footer class="footer-warpper">

  </footer>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'
import FileUpload from './components/FileUpload/index.vue'
import { ref, reactive, onMounted, nextTick, watch } from 'vue'
let uploadComponentRef = ref<{ fileContent: string[], fileName: string }>()

</script>
 
<style scoped lang="less">
.top-container {
  background-color: #B721FF;
  background-image: linear-gradient(31deg, #d7a4ef 22%, #21D4FD 52%, #ffffff 86%);
}

.upload-wapper {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 72px;
  color: #fff;

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
</style>