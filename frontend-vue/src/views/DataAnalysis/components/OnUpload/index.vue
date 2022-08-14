<template>
  <div class="container" ref="annotationComponentRef">
    <!-- 吸附区域 -->
    <div class="top-show-warpper">
      <div class="left-file-select">
        <span>当前标注文件:</span>
        <el-select v-model="currentIndex" class="m-2" placeholder="Select">
          <el-option v-for="item in store.getFileIndexSelectOptions" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
      </div>
      <div class="right-data-select">
        <el-button type="primary" round @click="showAlReadyAnnotationData">查看已标注数据</el-button>
      </div>
    </div>
    <!-- 标注内容区域 -->
    <main class="content-warpper">
      <section class="left-content">
        <!-- 数据标注区域区域 -->
        <div class="data-show" ref="annotationContainer">
        </div>
      </section>
      <!-- 功能区域 -->
      <section class="right-content">
        <!-- 统计信息 -->
        <div class="top-info">
          <span>实体数<div class="info-data">{{ store.annotationData[currentIndex].labels.length }}</div></span>
          <span>关系数<div class="info-data">{{store.annotationData[currentIndex].connections.length }}</div></span>
        </div>
        <!-- 增加实体型 -->
        <div class="add-entity">
          <div class="current-choose">
            当前选中:<span>{{ textSelectedOption.currentChoosedEntity }}</span>
          </div>
          <div class="select-menus">
            <span>实体类型菜单：</span>
            <el-select v-model="textSelectedOption.userChoosedCategoryId" class="m-2" placeholder="请选择标注实体型"
              size="large">
              <el-option v-for="item in store.getEntityTypeSelectOptions" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
          <!-- 快捷方式表 -->
          <div class="short-select">
            <span>键盘快捷方式</span>
            <ul class="key-list">
              <li class="key-item">1</li>
              <li class="key-item">2</li>
              <li class="key-item">3</li>
              <li class="key-item">4</li>
              <li class="key-item">5</li>
              <li class="key-item">6</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
              <li class="key-item">7</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <!--数据与图展示区域  -->
    <main class="graph-data-warpper">
      <!-- 标注实体统计 -->
      <section class="data-table" style="height:1000px">

      </section>
      <!-- top n tips -->
      <section class="statistic-top">

      </section>
    </main>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, watch, onMounted, onUnmounted } from 'vue'
import { useAnnotation } from '@/store'
import { Annotator, Action } from 'poplar-annotation'
import { useMousePosition } from '@/hooks/useMousePosition'
/**
 * 切换文件模块
 */
const store = useAnnotation() //状态库
let currentIndex = ref<number>(0) //文件索引
let currentAnnotationData = store.annotationData[0] //当前标注的文本内容
//监视元素,当文件索引变化时，改变当前数据
watch(currentIndex, () => {
  currentAnnotationData = store.annotationData[currentIndex.value] //改变当前选择数据  
  registerAnnotator() //重新注册一下标注对象
  //置空上一个文件收集对象
  textSelectedOption.userChoosedCategoryId = null
  textSelectedOption.startIndex = -1
  textSelectedOption.endIndex = -1
  textSelectedOption.currentChoosedEntity = '未选择'
})
/**
 * 顶部功能区模块
 */
const showAlReadyAnnotationData=()=>{
  console.log(store.alReadyAnnotationData[currentIndex.value]);
  
}
/**
 * useAnnotation 数据标注模块
 */
//标注绑定的dom元素
let annotationContainer = ref<HTMLElement>()
//实例对象
let annotator: Annotator
//保存textSelected的内容
const textSelectedOption = reactive({
  userChoosedCategoryId: null as unknown,
  startIndex: -1,
  endIndex: -1,
  currentChoosedEntity: '未选择',
})
const registerAnnotator = () => {
  if (annotator) {
    annotator.remove()
  }
  annotator = new Annotator(currentAnnotationData, annotationContainer.value as HTMLElement, { contentEditable: false });
  //当选中某行时，保存一下坐标
  annotator.on('textSelected', (startIndex: number, endIndex: number) => {
    textSelectedOption.startIndex = startIndex
    textSelectedOption.endIndex = endIndex
    textSelectedOption.currentChoosedEntity = currentAnnotationData.content.slice(startIndex, endIndex)
  })
}
/**
 * 增加标签
 */
const addLabel = (userChoosedCategoryId: number, startIndex: number, endIndex: number) => {
  annotator.applyAction(Action.Label.Create(userChoosedCategoryId, startIndex, endIndex));
  //向状态库里面更新标注的实体
  store.alReadyAnnotationData[currentIndex.value].push(`${textSelectedOption.currentChoosedEntity} ${store.getCurrentEntityType(userChoosedCategoryId)}`)
  //更新数据
  currentAnnotationData.labels = annotator.store.json.labels
  currentAnnotationData.connections = annotator.store.json.connections
  //置空
  textSelectedOption.userChoosedCategoryId = null
  textSelectedOption.currentChoosedEntity = '未选择'
}
/**
 * 增加关系
 */

/**
 * 窗口尺寸改变调整回调
 */
const reDraw = () => {
  let internalID: any = null
  return () => {
    clearTimeout(internalID);
    internalID = setTimeout(
      () => {
        registerAnnotator()
      }
      , 500)
  }
}
onMounted(() => {
  registerAnnotator()
  console.log('已注册标注对象');
  window.addEventListener('resize', reDraw())
  document.addEventListener('keyup', doKeyboard)
})
onUnmounted(() => {
  window.removeEventListener('resize', reDraw())
  document.removeEventListener('keyup', doKeyboard)
})

//增加label
watch(() => textSelectedOption.userChoosedCategoryId, () => {
  if (textSelectedOption.userChoosedCategoryId === null || textSelectedOption.currentChoosedEntity == '未选择') {
    //置空
    textSelectedOption.userChoosedCategoryId = null
    textSelectedOption.currentChoosedEntity = '未选择'
    return
  }
  addLabel(Number(textSelectedOption.userChoosedCategoryId), textSelectedOption.startIndex, textSelectedOption.endIndex)
})
//绑定键盘事件
let annotationComponentRef = ref<HTMLElement>()
let { y } = useMousePosition()
const doKeyboard = (e: KeyboardEvent) => {
  let top = annotationComponentRef.value?.getBoundingClientRect().top ?? 100
  if (y.value - top <= 80) return;
  if (e.key == 's') textSelectedOption.userChoosedCategoryId = 0;
}
</script>
 
<style scoped lang="less">
.container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  position: relative;

  // 吸附区域
  .top-show-warpper {
    position: sticky;
    top: 0;
    width: 100%;
    height: 64px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    background-color: #fff;
    opacity: 1;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

//公用卡片组件同样式
.card() {
  margin-top: 5%;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12);
  background-color: #fff;
  border-radius: 10px;
}

//标注区域
.content-warpper {
  padding: 0 1%;
  display: flex;
  justify-content: space-around;


  //左侧区域
  .left-content {
    width: 70%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    padding: 1%;

    //数据域
    .data-show {
      height: 500px;
      overflow: auto;
    }
  }

  //右侧区域
  .right-content {
    width: 25%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);

    .top-info {
      height: 60px;
      border-bottom: 1px solid #ccc;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: center;

      span {
        height: 100%;
        width: 50%;
        position: relative;

        .info-data {
          display: inline;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .add-entity {
      height: 440px;

      .current-choose {
        overflow: auto;
        height: 60px;
        border-bottom: 1px dashed #ccc;
        line-height: 60px;
        text-align: center;
      }

      .select-menus {
        display: flex;
        height: 60px;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px dashed #ccc;

        span {
          display: block;
          line-height: 60px;
        }
      }

      .short-select {
        height: 310px;
        overflow: auto;

        span {
          display: block;
          width: 100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
        }

        .key-list {
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .key-item {
            flex-grow: 1;
            height: 50px;
            line-height: 50px;
            width: 45%;
            border-bottom: 1px solid #ccc;
            border-right: 1px solid #ccc;
            box-sizing: content-box;

            &:nth-child(2n),
            &:last-child {
              border-right: none;
            }
          }
        }
      }
    }
  }
}

//数据区域
.graph-data-warpper {
  padding: 0 1%;
  display: flex;
  justify-content: space-around;

  .data-table {
    width: 70%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    padding: 1%;
  }

  .statistic-top {
    width: 25%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  }
}

// useAnnotation 相关css
::v-deep .data-show svg {
  width: 100%;
  overflow: auto;
}
</style>