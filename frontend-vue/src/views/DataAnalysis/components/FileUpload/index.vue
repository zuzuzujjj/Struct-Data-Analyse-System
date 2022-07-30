<template>
  <div>
    <el-button @click="toClick">点我上传</el-button>
    <!-- 上传 -->
    <input type="file" name="" id="" @change="loadTextFromFile" accept=".txt, .json" style="display: none" ref="uploadRef">
    <!-- 展示 -->
    <p>
      {{fileContent}}
    </p>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import {useFileReader} from '@/hooks/useFileReader '
const uploadRef=ref<HTMLElement>()
const toClick=()=>{
  uploadRef.value?.click()
}
let fileContent =ref()
const loadTextFromFile = (e: any) => {
  const file = e.target.files[0];
  let name = file?.name.split(".").splice(-1).toString();
  useFileReader(file,(e: any) =>{fileContent.value=e})
}
</script>
 
<style scoped>
</style>