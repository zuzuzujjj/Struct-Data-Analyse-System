<template>
  <div class="container">
    <div class="title">
      多种的数据源与图数据分析
    </div>
    <div class="description">
      学习如何利用搜索引擎搜索所需的图数据
    </div>
    <div class="description-card">
      <div class="left-card-item" id="leftCardG2" ref="leftCardG2">
        <std-graph :data="data" :plugins="{minimap:true}" style="height: 100%;width: 100%;" ></std-graph>
      </div>
      <div class="right-card-item">
        <span @click="changeData">精选</span>
        <p class="item-title">结构化数据预览,可视化解决方案,图表丰富。</p>
        <p class="item-content">通过多种类型的图表展示方式,快速轻松的制作出满意的图表,结构化数据分析一步到位,快速的生成所需要的相关图表数据等,知识图谱查询。</p>
      </div>
    </div>
  </div>

</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted } from 'vue'
import StdGraph from '../../../components/StdGraph/index.vue'
import useGraphData from '../../../hooks/useGraphData'
let nodes = [
  {
    id: 'node1', // String，该节点存在则必须，节点的唯一标识
    label: "Circle1",
    x: 100, // Number，可选，节点位置的 x 值
    y: 200, // Number，可选，节点位置的 y 值
  },
  {
    id: 'node2', // String，该节点存在则必须，节点的唯一标识
    label: "Circle2",
    x: 300, // Number，可选，节点位置的 x 值
    y: 200, // Number，可选，节点位置的 y 值
  },
]
let edges = [
  {
    source: 'node1', // String，必须，起始点 id
    target: 'node2', // String，必须，目标点 id
  },
]
let data = useGraphData(nodes, edges)

const changeData = () => {
  data.nodes.push({
    id: 'node3', // String，该节点存在则必须，节点的唯一标识
    label: "Circle1",
    x: 500, // Number，可选，节点位置的 x 值
    y: 200, // Number，可选，节点位置的 y 值
  })
  // 点集
  console.log('触发更新');

}
onMounted(() => {
  console.log(data);

})
</script>
 
<style scoped lang='less'>
.container {
  height: 1000px;
  padding: 0 4.5%;
  padding-top: 48px;
  background-color: #f7f7f7;
}

.title {
  font-size: 20px;
  line-height: 30px;
  margin-bottom: 0;
  color: rgba(0, 0, 0, .87);

}

.description {
  color: rgba(0, 0, 0, .54);
  font-size: 16px;
  line-height: 24px;
  margin-bottom: 24px;
}

.description-card {
  background-color: #fff;
  min-height: 365px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12);
  display: flex;
  padding: 32px;

  &:hover {
    box-shadow: 0 8px 10px 1px rgb(0 0 0 / 7%), 0 3px 14px 3px rgb(0 0 0 / 6%), 0 4px 5px 0 rgb(0 0 0 / 10%);
  }

  .left-card-item {
    height: 365px;
    width: 50%;
    overflow: auto;

  }

  .right-card-item {
    height: 365px;
    width: 50%;
    font-family: 'Roboto', 'Heebo', Arial, sans-serif;
    padding-left: 48px;

    span {
      display: block;
      color: #0f9d58;
      margin-bottom: 16px;
    }

    .item-title {
      font-size: 28px;
      line-height: 34px;
      margin-bottom: 16px;

    }

    .item-content {
      font-size: 15px;
      line-height: 24px;
      max-height: 72px;
      margin-bottom: 16px;

    }
  }
}
</style>