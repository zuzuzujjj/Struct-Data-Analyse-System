<template>
  <div class="top-container">
    <!-- 头部 -->
    <Header></Header>
    <!-- 上传部分 -->
    <div class="upload-wapper">
      <!-- 左边 -->
      <div class="left-menus">
        <!-- 标题 -->
        <p class="menus-title animate__animated animate__fadeInDown">实体型关系标注平台</p>
        <p class="menus-des">快速的利用实体标注生成对应的三元组信息,可视化修改,随时观察,动态添加删除,从无到有制作自己的三元组数据,一键下载,快速保存</p>
        <p class="menus-des">利用实体关系,快速挖掘属于自己的分析数据,数据分析内在联系,随时修改,可视化知识图谱预览</p>
        <!-- 上传框 -->
        <div class="upload-box">
          <!-- 上传 -->
          <el-button round @click="toUpoladFile">上传文件</el-button>
          <input type="file" @change="loadTextFromFile" accept=".txt, .json, .traintest" style="display: none"
            ref="uploadRef">
          <!-- 按钮 -->
          <el-button round>快速使用</el-button>
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
    <NotUpload v-if="!isUpoladFile"></NotUpload>
    <OnUpload v-if="isUpoladFile"></OnUpload>
  </main>
</template>
 
 
<script lang='ts' setup>
import Header from '@/components/Header/index.vue'
import NotUpload from './components/NotUpload/index.vue'
import OnUpload from './components/OnUpload/index.vue'
import { ref, reactive, onMounted, nextTick, watch, provide } from 'vue'
import { useFileReader } from '@/hooks/useFileReader '
import { useStructData } from '@/store'
import { node } from '@/hooks/useGraphData'
/**
 * useStructData 存储管理库
 */
const dataStore = useStructData()
/**
 * 上传功能
 */
const uploadRef = ref<HTMLElement>()
const toUpoladFile = () => { //点击上传
  uploadRef.value?.click()
}
let fileContent = ref<node[]>([]) //文本内容
let fileName = ref<string>() //文本名字
const loadTextFromFile = (e: any) => { //读取文件内容
  const file = e.target?.files[0];
  if (!file) return;
  fileName.value = file.name
  useFileReader(file, (r: node[]) => { fileContent.value = r })
}
//向store中添加数据
watch(fileName, () => {
  dataStore.addDataName(fileName.value as string)
})
watch(fileContent, () => {
  dataStore.addDataEntity(fileContent.value)
  dataStore.addDataEdge([]) //添加空数组占位 
  isUpoladFile.value=true
})


const isUpoladFile = ref<boolean>(false)  //是否搜索

</script>
 
<style scoped lang="less">
.top-container {
  background-color: #0F161C;
  height: 100vh;
}

.upload-wapper {
  width: 100%;
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
    justify-content: space-around;
    align-items: center;
    width: 50%;

    .menus-title {
      font-size: 44px;
      line-height: 56px;
      padding: 0 40px 40px;
      width: 535px;
      color: #fff;
      text-align: center;
    }

    .menus-des {
      font-size: 18px;
      margin-top: 15px;
      word-break: break-all;
      word-wrap: break-word;
      letter-spacing: 3px;
      z-index: 2;
      width: 80%;
      text-indent: 2em;
      line-height: 29px;
    }

    .upload-box {
      width: 100%;
      margin-top: 20%;
      display: flex;
      justify-content: center;

      .el-button {
        width: 150px;
        height: 45px;
        border-radius: 45px;
        margin-right: 5%;
        color: #000;

        &:nth-child(1) {
          border: none;
          background-color: #00CFFF;
          opacity: 1;

          &:hover {
            opacity: .8;
          }
        }

      }
    }
  }

  .right-image {
    height: 100%;
    width: 50%;

    img {

      width: 85%;
      object-fit: cover;
    }
  }
}
</style>