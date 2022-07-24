<template>
  <div class="content">
     <std-graph :data="defaultData" :plugins="['minimap']" :minimapszie="[150, 100]" ></std-graph>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref,reactive,inject, onMounted } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
let defaultData=inject('searchData')
onMounted(()=>{
    console.log(defaultData);
})
</script>
 
<style scoped lang="less">
.content{
    height:800px;
    width: 100%;
}
</style>