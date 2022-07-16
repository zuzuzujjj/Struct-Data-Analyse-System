<template>
  <div>
    <Header></Header>
    <div style="height:800px">
    </div>

  </div>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'

import { ref, reactive,onMounted } from 'vue'
onMounted(()=>{
  console.log(111);
  
})

</script>
 
<style scoped>
</style>