<template>
  <div>
    <Header></Header>
    <div style="height:800px">
    <FileUpload></FileUpload>
    </div>
  </div>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'
import FileUpload from './components/FileUpload/index.vue'
import { ref, reactive, onMounted } from 'vue'


</script>
 
<style scoped>
</style>