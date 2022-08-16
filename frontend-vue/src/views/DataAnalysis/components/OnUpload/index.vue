<template>
  <div class="container" ref="annotationComponentRef">
    <!-- 吸附区域 -->
    <div class="top-show-warpper">
      <div class="left-file-select">
        <span>当前标注文件:</span>
        <el-select v-model="currentIndex" class="m-2" placeholder="Select">
          <el-option v-for="item in store.getFileIndexSelectOptions" :key="item.value" :label="item.label"
            :value="item.value" />
        </el-select>
      </div>
      <div class="right-data-select">
        <el-button type="primary" round @click="downLoadAlReadyAnnotationData">导出实体数据</el-button>
        <el-button type="primary" round @click="downLoadAlReadyAnnotationConnection">导出关系数据</el-button>
        <el-button type="primary" round @click="toShowGraph">生成知识图谱</el-button>
      </div>
    </div>
    <!-- 添加关系选择菜单 -->
    <el-drawer v-model="shouldOpenDrawer" direction="ttb" size="20%" :show-close="false" :with-header="false">
      <div class="seclect-connect-warpper">
        <span>请选择对应的实体关系</span>
        <el-select v-model="entitySelectedOption.userChooseConnectionId" filterable allow-create default-first-option
          :reserve-keyword="false" placeholder="选择实体关系">
          <el-option v-for="item in  store.getConnectionTypeSlectOptions(currentIndex)" :key="item.value"
            :label="item.label" :value="item.value" />
        </el-select>
        <el-button type="primary" @click="confirmAddConnection">确定</el-button>
      </div>
    </el-drawer>
    <!-- 标注内容区域 -->
    <main class="content-warpper">
      <!-- 数据标注区域区域 -->
      <section class="left-content">
        <div class="data-show" ref="annotationContainer">
        </div>
      </section>
      <!-- 功能区域 -->
      <section class="right-content">
        <!-- 统计信息 -->
        <div class="top-info">
          <span>实体数<div class="info-data">{{ store.annotationData[currentIndex].labels.length }}</div></span>
          <span>关系数<div class="info-data">{{ store.annotationData[currentIndex].connections.length }}</div></span>
        </div>
        <!-- 增加实体型 -->
        <div class="add-entity">
          <div class="current-choose">
            当前选中:<span>{{ textSelectedOption.currentChoosedEntity }}</span>
          </div>
          <div class="select-menus">
            <span>实体类型菜单：</span>
            <el-select v-model="textSelectedOption.userChooseEntityId" class="m-2" placeholder="请选择标注实体型" size="large">
              <el-option v-for="item in store.getEntityTypeSelectOptions" :key="item.value" :label="item.label"
                :value="item.value" />
            </el-select>
          </div>
          <!-- 键盘快捷方式表 -->
          <div class="short-select">
            <span class="short-title">键盘快捷方式</span>
            <ul class="key-list">
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/mouseR.svg" alt=""></span>
                <el-tag class="ml-2" type="success">删除实体</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/Q_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">B—LOC--地点</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/W_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">I—LOC--词的中间</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/E_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">B—PER--人物</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/R_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">I—PER</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/A_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">B—ORG--组织</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/D_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">I—ORG</el-tag>
              </li>
              <li class="key-item">
                <span class="keybord"><img src="./image/icons/F_round.svg" alt=""></span>
                <el-tag class="ml-2" type="success">O--其它</el-tag>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
    <!--实体数据与分析展示区域  -->
    <main class="entity-data-warpper">
      <!-- 标注实体统计 -->
      <section class="data-table">
        <el-table :data="store.alReadyAnnotationData[currentIndex]" style="width: 100%" height="400">
          <el-table-column prop="text" label="实体名称" width="180" />
          <el-table-column prop="type" label="实体类型" width="180" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="small" type="danger" @click="handleEntityDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <!-- 右侧图表分析 -->
      <section class="data-right-chart">
        实体分析区域
      </section>
    </main>
    <!-- 关系数据与分析区域 -->
    <main class="connection-data-warpper">
      <!-- 标注关系三元组统计 -->
      <section class="connection-table">
        <el-table :data="store.getTriplet(currentIndex)" style="width: 100%" height="400">
          <el-table-column prop="start" label="实体名称" width="130" />
          <el-table-column prop="connection" label="实体关系" width="130" />
          <el-table-column prop="end" label="实体名称" width="130" />
          <el-table-column label="操作">
            <template #default="scope">
              <el-button size="small" type="danger" @click="handleTripletDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </section>
      <!-- 右侧图表分析 -->
      <section class="connection-right-chart">
        实体关系分析区域
      </section>
    </main>
    <!-- 生成图数据展示区域 -->
    <main class="graph-show-wapper" v-if="isShowGraph" ref="showGraphComponentRef">
      <div class="graph-show">
        <std-graph :data="store.getGraphData(currentIndex)" :plugins="['minimap', 'toolbar']" :minimapszie="[200, 100]">
        </std-graph>
      </div>
      <div class="right-menus">
      </div>
    </main>
    <footer style="height:200px;"></footer>
  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, watch, onMounted, onUnmounted, toRaw, nextTick } from 'vue'
import { useAnnotation } from '@/store'
import { Annotator, Action } from 'poplar-annotation'
import { useMousePosition } from '@/hooks/useMousePosition'
import { useDownloadEntity, useDownloadConnection } from '@/hooks/useDownloadEntity'
import StdGraph from '@/components/StdGraph/index.vue'
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
  textSelectedOption.userChooseEntityId = null
  textSelectedOption.startIndex = -1
  textSelectedOption.endIndex = -1
  textSelectedOption.currentChoosedEntity = '未选择'
  entitySelectedOption.userChooseConnectionId = null
  //关闭知识图谱
  isShowGraph.value=false
})
/**
 * 顶部功能区模块
 */
const downLoadAlReadyAnnotationData = () => {
  useDownloadEntity(store.alReadyAnnotationData[currentIndex.value], store.fileName[currentIndex.value] + '-entity-do')
}
const downLoadAlReadyAnnotationConnection = () => {
  useDownloadConnection(store.getTriplet(currentIndex.value), store.fileName[currentIndex.value] + '-connection-do')
}
//生成知识图谱
let isShowGraph=ref<boolean>(false)
let showGraphComponentRef=ref<HTMLElement>()
const toShowGraph=()=>{
  isShowGraph.value= true
  nextTick(()=>{
    showGraphComponentRef.value?.scrollIntoView()
  })
}
/**
 * useAnnotation 数据标注模块
 */
//标注绑定的dom元素
let annotationContainer = ref<HTMLElement>()
//实例对象
let annotator: Annotator
//保存textSelected的内容,选择的关系内容
const textSelectedOption = reactive({
  userChooseEntityId: null as unknown,
  startIndex: -1,
  endIndex: -1,
  currentChoosedEntity: '未选择',

})
//保存entitySelectedOption的内容，前后点击的实体信息
const entitySelectedOption = reactive({
  userChooseConnectionId: null as unknown,
  fromId: -1,
  toId: -1
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
  //右键点击实体时删除标签
  annotator.on('labelRightClicked', (id: number) => {
    // 输出用户点击的label的ID
    removeLabel(id)
  })
  //连续点击两个标签时增加关系
  annotator.on('twoLabelsClicked', (fromId: number, toId: number) => {
    // 输出用户选取的两个label的ID
    entitySelectedOption.fromId = fromId
    entitySelectedOption.toId = toId
    shouldOpenDrawer.value = true //打开Drawer
  })
  //右键删除connection
  annotator.on('connectionRightClicked', (id: number) => {
    // 输出用户点击的Connection的ID, 点击鼠标的event
    removeConnection(id)
  });
}
/**
 * 
 * @param userChooseEntityId 用户选择ID
 * @param startIndex 开始索引
 * @param endIndex 结束索引
 */
const addLabel = (userChooseEntityId: number, startIndex: number, endIndex: number) => {
  annotator.applyAction(Action.Label.Create(userChooseEntityId, startIndex, endIndex));
  //更新数据
  currentAnnotationData.labels = annotator.store.json.labels
  currentAnnotationData.connections = annotator.store.json.connections
  //向状态库里面更新标注的实体
  store.alReadyAnnotationData[currentIndex.value].push({
    id: currentAnnotationData.labels.slice(-1)[0].id,
    text: textSelectedOption.currentChoosedEntity,
    type: store.getCurrentEntityType(userChooseEntityId)
  })
  //置空
  textSelectedOption.userChooseEntityId = null
  textSelectedOption.currentChoosedEntity = '未选择'
}
/**
 * 
 * @param id 删除id
 */
const removeLabel = (id: number) => {
  //查出实体数据存储的位置
  let idIndex: number = 0
  for (let i = 0; i < store.alReadyAnnotationData[currentIndex.value].length; i++) {
    if (id === store.alReadyAnnotationData[currentIndex.value][i].id) {
      idIndex = i
      break
    }
  }
  //更新已标注的状态数据
  store.alReadyAnnotationData[currentIndex.value].splice(idIndex, 1)
  annotator.applyAction(Action.Label.Delete(id));
  //查出和该实体相关的关系位置,删除与之相关联的关系
  for (let i = 0; i < store.alReadyAnnotationConnection[currentIndex.value].length; i++) {
    if (id === store.alReadyAnnotationConnection[currentIndex.value][i].fromId || id === store.alReadyAnnotationConnection[currentIndex.value][i].toId) {
      store.alReadyAnnotationConnection[currentIndex.value].splice(i, 1)
      i -= 1
    }
  }

  //更新状态库
  currentAnnotationData.labels = annotator.store.json.labels
  currentAnnotationData.connections = annotator.store.json.connections
}
/**
 * 
 * @param fromId 开始id
 * @param toId 结束ID
 */
const addConnection = (fromId: number, toId: number) => {
  annotator.applyAction(Action.Connection.Create(Number(entitySelectedOption.userChooseConnectionId), fromId, toId))
  //添加相同的关系边，直接返回
  if (currentAnnotationData.connections.length === annotator.store.json.connections.length) return;
  //更新数据
  currentAnnotationData.labels = annotator.store.json.labels
  currentAnnotationData.connections = annotator.store.json.connections

  //向状态库里面更新标注的关系
  store.alReadyAnnotationConnection[currentIndex.value].push({
    id: currentAnnotationData.connections.slice(-1)[0].id,
    fromId,
    toId,
    type: store.getCurrentConnnectionType(Number(entitySelectedOption.userChooseConnectionId), currentIndex.value)
  })

  //置空
  entitySelectedOption.userChooseConnectionId = null
}
/**
 * 
 * @param id 需要删除的connect id
 */
const removeConnection = (id: number) => {
  let idIndex: number = 0
  for (let i = 0; i < store.alReadyAnnotationConnection[currentIndex.value].length; i++) {
    if (id === store.alReadyAnnotationConnection[currentIndex.value][i].id) {
      idIndex = i
      break
    }
  }
  //更新已标注的状态数据
  store.alReadyAnnotationConnection[currentIndex.value].splice(idIndex, 1)
  annotator.applyAction(Action.Connection.Delete(id));
  //更新状态库
  currentAnnotationData.labels = annotator.store.json.labels
  currentAnnotationData.connections = annotator.store.json.connections
}
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

//监控userChooseEntityId，当用户选择了时，增加label
watch(() => textSelectedOption.userChooseEntityId, () => {
  if (textSelectedOption.userChooseEntityId === null || textSelectedOption.currentChoosedEntity == '未选择') {
    //置空
    textSelectedOption.userChooseEntityId = null
    textSelectedOption.currentChoosedEntity = '未选择'
    return
  }
  addLabel(Number(textSelectedOption.userChooseEntityId), textSelectedOption.startIndex, textSelectedOption.endIndex)
})
//绑定增加实体键盘事件
let annotationComponentRef = ref<HTMLElement>()
let { y } = useMousePosition()
const doKeyboard = (e: KeyboardEvent) => {
  let top = annotationComponentRef.value?.getBoundingClientRect().top ?? 100
  if (y.value - top <= 80) return;
  if (e.key == 'q' || e.key == 'Q') textSelectedOption.userChooseEntityId = 0;
  if (e.key == 'w' || e.key == 'W') textSelectedOption.userChooseEntityId = 1;
  if (e.key == 'e' || e.key == 'E') textSelectedOption.userChooseEntityId = 2;
  if (e.key == 'r' || e.key == 'R') textSelectedOption.userChooseEntityId = 3;
  if (e.key == 'a' || e.key == 'A') textSelectedOption.userChooseEntityId = 4;
  if (e.key == 'd' || e.key == 'D') textSelectedOption.userChooseEntityId = 5;
  if (e.key == 'f' || e.key == 'F') textSelectedOption.userChooseEntityId = 6;
}
//实体展示
const handleEntityDelete = (index: number, row: { id: number; text: string; type: string }) => {
  removeLabel(row.id)
}
/**
 * 添加connection模块
 */
let shouldOpenDrawer = ref<boolean>(false) //是否应该打开Drawer
const confirmAddConnection = () => {
  if (entitySelectedOption.userChooseConnectionId === null) {
    shouldOpenDrawer.value = false
    return
  }
  //先确认用户选择的是否在标注对象中
  if (Number(entitySelectedOption.userChooseConnectionId) <= currentAnnotationData.connectionCategories.length - 1) {
    addConnection(entitySelectedOption.fromId, entitySelectedOption.toId)
  }
  else {
    currentAnnotationData.connectionCategories.push({
      id: currentAnnotationData.connectionCategories.length,
      text: String(entitySelectedOption.userChooseConnectionId)
    })
    //重新注册一下标注对象
    registerAnnotator()
    entitySelectedOption.userChooseConnectionId = currentAnnotationData.connectionCategories.length - 1
    addConnection(entitySelectedOption.fromId, entitySelectedOption.toId)
  }
  // 置空
  entitySelectedOption.userChooseConnectionId = null
  shouldOpenDrawer.value = false
}
//三元组展示
const handleTripletDelete = (index: number, row: { id: number; start: string; connection: string; end: string }) => {
  removeConnection(row.id)
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

    .left-file-select {
      margin-left: 2%;

      span {
        margin-right: 15px;
      }
    }

    .right-data-select {
      margin-right: 2%;
    }
  }

  //增加关系区域
  .seclect-connect-warpper {
    display: flex;
    height: 100%;
    align-items: center;

    span {
      margin-right: 20px;
    }

    .el-select {
      margin-right: 20px;
    }
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
        height: 80%;
        width: 50%;
        position: relative;
        margin-top: 10px;
        box-sizing: content-box;

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

      //下拉框选择菜单
      .select-menus {
        display: flex;
        height: 60px;
        justify-content: space-around;
        align-items: center;
        border-bottom: 1px dashed #ccc;

        span {
          display: block;
        }
      }

      //快捷方式表
      .short-select {
        height: 310px;
        overflow: auto;

        .short-title {
          display: block;
          width: 100%;
          height: 60px;
          line-height: 60px;
          text-align: center;
          border-bottom: 1px dashed #ccc;
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
            display: flex;
            align-items: center;

            &:nth-child(2n),
            &:last-child {
              border-right: none;
            }

            .keybord {
              height: 100%;
              width: 30%;

              img {
                vertical-align: middle;
                height: 70%;
                width: 100%;
              }
            }

            .ml-2 {
              flex-grow: 1;
              margin-right: 5px;
            }
          }
        }
      }
    }

    .add-connection {
      position: fixed;
      height: 300px;
      width: 300px;
      background-color: red;
    }
  }
}

//实体数据区域
.entity-data-warpper {
  padding: 0 1.75%;
  display: flex;
  justify-content: space-between;
  height: 500px;

  .data-table {
    width: 35%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    padding: 1%;
  }

  .data-right-chart {
    width: 60%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  }
}

//连接关系数据区域
.connection-data-warpper {
  padding: 0 1.75%;
  display: flex;
  justify-content: space-between;
  height: 500px;

  .connection-table {
    width: 35%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
    padding: 1%;
  }

  .connection-right-chart {
    width: 60%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
  }
}

//图展示区域
.graph-show-wapper {
  padding: 0 1.75%;
  display: flex;
  justify-content: space-between;
  height: 500px;

  .graph-show {
    padding: 1.5%;
    height: 100%;
    width: 65%;
    .card;
    box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);

  }

  .right-menus {
    padding: 1.5%;
    height: 100%;
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