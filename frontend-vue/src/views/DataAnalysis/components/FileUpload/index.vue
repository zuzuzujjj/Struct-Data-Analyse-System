<template>
  <div>
    <el-button @click="toClick">上传文件</el-button>
    <!-- 上传 -->
    <input type="file" name="" id="" @change="loadTextFromFile" accept=".txt, .json, .traintest" style="display: none"
      ref="uploadRef">
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import { useFileReader } from '@/hooks/useFileReader '
const uploadRef = ref<HTMLElement>()
const toClick = () => {
  uploadRef.value?.click()
}
//文本内容
let fileContent = ref<string[]>([])
//文本名字
let fileName=ref<string>()
//读取文件内容
const loadTextFromFile = (e: any) => {
  const file = e.target?.files[0];
  if (!file) return;

  fileName.value=file.name
  useFileReader(file, (r: any) => { fileContent.value = r })
}
defineExpose({
  fileContent,
  fileName
})
</script>
 
<style scoped>
</style>