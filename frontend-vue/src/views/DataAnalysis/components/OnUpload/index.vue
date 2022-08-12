<template>
  <div class="container">
    <!-- 内容区域 -->
    <main class="content-warpper">
      <section class="left-content">
        <!-- 数据标注区域区域 -->
        <div class="data-show">
          {{currentAnnotationData}}
        </div>
      </section>
      <section class="right-content">
        右
      </section>
    </main>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, watch } from 'vue'
import { useAnnotation } from '@/store'
const store = useAnnotation() //状态库
let currentIndex = ref<number>(0) //文件索引
let currentAnnotationData=ref(store.fileNameContent[currentIndex.value]) //当前标注的文本内容

//监视元素,当文件索引变化时，改变当前数据
watch(currentIndex, () => {
  currentAnnotationData.value=store.fileNameContent[currentIndex.value] //改变当前选择数据
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

// useAnnotation 相关css
.data-show > svg{
  width: 100%;
}
/* 内容 */
.poplar-annotation-content {
    font-family: "PingFang SC", serif;
    font-size: 20px;
}
/* Label */
.poplar-annotation-label {
    font-family: "PingFang SC", serif;
    font-size: 14px;
}
/* Connection */
.poplar-annotation-connection {
    font-family: "PingFang SC", serif;
    font-size: 12px;
}
</style>