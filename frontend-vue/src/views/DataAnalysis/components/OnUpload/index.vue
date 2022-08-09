<template>
  <div class="container">
    <!-- 内容区域 -->
    <main class="content-warpper">
      <section class="left-content">
        <!-- 图区域 -->
        <div class="graph-show">
          <std-graph :data="defaultData"></std-graph>
        </div>
        <!-- 数据区域 -->
        <div class="data-show">

        </div>
      </section>
      <section class="right-content">
        右
      </section>
    </main>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, toRaw, watch } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
import useGraphData from '@/hooks/useGraphData';
import { useStructData } from '@/store'
const store = useStructData() //状态库
let currentIndex = ref<number>(0) //文件索引
const defaultData = useGraphData(toRaw(store.dataEntity[currentIndex.value]), toRaw(store.dataEdge[currentIndex.value])) //生成图数据

//监视元素,当文件索引变化时，改变当前数据
watch(currentIndex, () => {
  defaultData.nodes = toRaw(store.dataEntity[currentIndex.value])
  defaultData.edges = toRaw(store.dataEdge[currentIndex.value])
})
</script>
 
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;
}

.content-warpper {
  padding: 0 1%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  //卡片组件同样式
  .card() {
    margin-top: 5%;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12);
    background-color: #F1F2F2;
  }

  //左侧区域
  .left-content {
    width: 70%;
    .card;

    //图区域
    .graph-show {
      height: 500px;
    }

    //数据域
    .data-show {}
  }

  //右侧区域
  .right-content {
    width: 29%;
    height: 350px;
    .card;
  }
}
</style>