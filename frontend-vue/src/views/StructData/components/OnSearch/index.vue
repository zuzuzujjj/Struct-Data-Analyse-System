<template>
  <div class="onsearch-warpper">
    <div class="onsearch-content">
      <div class="graph-content">

      </div>
      <div class="right-warpper">

      </div>
    </div>

    <!-- <std-graph :data="defaultData" :plugins="['minimap']" :minimapszie="[150, 100]" ></std-graph> -->
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, inject, onMounted } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
let defaultData = inject('searchData')
onMounted(() => {
  console.log(defaultData);
})
</script>
 
<style scoped lang="less">
.onsearch-warpper {
  width: 100%;

  .onsearch-content {
    padding: 1% 2%;
    display: flex;
    justify-content: center;
    align-items:flex-start;
    .graph-content {
      background: #fff;
      min-height: 800px;
      width: 70%;
    }

    .right-warpper {
      width: 30%;
      height:1000px;
      background-color: #bfa;
    }

  }

}
</style>