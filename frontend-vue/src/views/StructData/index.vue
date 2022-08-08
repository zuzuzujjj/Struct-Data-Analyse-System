<template>
  <div class="top-container">
    <Header></Header>
    <!-- 输入框 -->
    <div class="input-warpper">
      <!-- 背景标题 -->
      <p class="animate__animated animate__fadeInDown">强大的图数据搜索与可视化系统</p>
      <!-- 输入框 -->
      <div class="input-box animate__animated animate__fadeIn">
        <input type="text" placeholder="输入搜索词或主题" v-model="inputSearch" @keyup.enter="getSearchEntity">
        <span @click="inputSearch = ''" class="delete-icon"><svg t="1657855668772" class="icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5125">
            <path
              d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"
              p-id="5126"></path>
          </svg></span>
        <span @click="getSearchEntity" class="search-icon">
          <svg t="1657855408940" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="2263">
            <path
              d="M511.975892 191.296945a23.234661 23.234661 0 1 0 0 46.934014 202.315808 202.315808 0 0 1 202.315808 202.315808 23.234661 23.234661 0 0 0 46.934015 0 249.191736 249.191736 0 0 0-249.249823-249.249822z"
              fill="#515151" p-id="2264"></path>
            <path
              d="M1009.313805 958.389268l-172.807789-172.807789a475.032638 475.032638 0 1 0-54.369106 53.555893l173.214395 173.214396a38.16293 38.16293 0 1 0 53.9625-53.9625z m-533.11929-90.03431a393.072373 393.072373 0 1 1 393.943672-392.0849 393.072373 393.072373 0 0 1-393.943672 392.0849z"
              fill="#515151" p-id="2265"></path>
          </svg></span>
      </div>
      <!-- 示例 -->
      <h2>搜索示例:</h2>
      <ul class="input-example animate__animated animate__bounce">
        <li @click="inputSearch = item" v-for="(item, index) in inputExample" :key="index">{{ item }}</li>
      </ul>
    </div>
  </div>
  <!-- 内容展示区 -->
  <div class="content-warpper" ref="currentShowComponent">
    <!-- 没搜索时显示这个 -->
    <NotSearch v-if="searchState.isNotSearch" v-model:inputSearch="inputSearch"></NotSearch>
    <!-- 多个实体型表 -->
    <ManyEnitiy v-if="searchState.isManyEntity" :allEntity="allEntity" v-model:currentEntity="currentEntity">
    </ManyEnitiy>
    <!-- 搜索了时显示搜索内容 -->
    <OnSearch v-if="searchState.isSearched" :currentEntity="currentEntity"></OnSearch>
    <!-- 404-notfound -->
    <NotEntity v-if="searchState.isNotEntity"></NotEntity>
  </div>
  <!-- 底部footer -->
  <footer class="footer-warpper">
    <div class="left-logo">
      <img src="../../assets/logo/logo2.png" alt="logo">
      <span>
      </span>
      <p>
        知识图谱
      </p>
    </div>
    <ul class="right-description">
      <li><a href="#/data-analysis" target="">数据分析</a></li>
      <li><a href="#/data-analysis" target="">机器学习</a></li>
      <li><a href="#/document" target="">文档</a></li>
    </ul>
  </footer>
</template>
 
 
<script lang='ts' setup>
import Header from '@/components/Header/index.vue'
import NotSearch from './components/NotSearch/index.vue'
import OnSearch from './components/OnSearch/index.vue'
import ManyEnitiy from './components/ManyEnitiy/index.vue'
import NotEntity from './components/NotEntity/index.vue'
//vue
import { ref, reactive, provide, watch, onMounted, nextTick } from 'vue'
//hook
import useGraphData, { edge, node } from '@/hooks/useGraphData'
import { useGetEntity, useGetEntityData } from '@/hooks/useGetData'

//输入逻辑块
let inputSearch = ref<string | number>('')
let inputExample = reactive<string[]>(['梅西', '内马尔', '马拉多纳', '罗纳尔多', '贝克汉姆', '贝利', '安德雷斯', '韦恩'])


//管理是否搜索、搜索结果的状态机
let searchState = reactive<{
  isNotSearch: boolean;
  isManyEntity: boolean;
  isSearched: boolean;
  isNotEntity: boolean;
}>({
  isNotSearch: true, //是否没搜索
  isManyEntity: false, //是否有多个实体型
  isSearched: false, //是否得到单实体型数据
  isNotEntity: false //是否没查找到此实体
})

//初始化默认节点数据
let nodes: node[] = [
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
let edges: edge[] = [
  {
    source: 'node1', // String，必须，起始点 id
    target: 'node2', // String，必须，目标点 id
  },
]
//graph图数据
let searchData = useGraphData(nodes, edges)
//为后续组件提供内容
provide('searchData', searchData)

//内容展示区ref
const currentShowComponent = ref<Element>()
const toComponentView = () => {
  currentShowComponent.value?.scrollIntoView(true)
}

//所有实体型数组
let allEntity = reactive<{ allEntity: string[] }>({ allEntity: [] })
//当前实体型
let currentEntity = ref<string>('')

//动态更改节点、请求数据
const getSearchEntity = async () => {
  //清空上一次的currentNode
  currentEntity.value = ''
  //搜索为空，展示主页
  if (inputSearch.value == '') {
    searchState.isManyEntity = false
    searchState.isSearched = false
    searchState.isNotEntity = false
    searchState.isNotSearch = true
    return
  }
  let temp: any = await useGetEntity(inputSearch.value)
  console.log('1、所有实体型为:', temp);

  //隐藏notsearch
  searchState.isNotSearch = false
  //搜索结果
  if (temp.length === 1) {
    //长度=1时，只有一个实体型
    currentEntity.value = temp[0]
  }
  else if (temp.length > 1) {
    //长度大于0
    allEntity.allEntity = temp
    //展示allentity组件
    searchState.isManyEntity = true
    searchState.isSearched = false
    searchState.isNotEntity = false

  }
  else if (temp.length === 0) {
    searchState.isManyEntity = false
    searchState.isNotEntity = true
    searchState.isSearched = false
  }
  //向下滑动至视口可视区域
  toComponentView()
  console.log('2、获得实体结束');
}
//获取数据，并赋值给searchData
const getEntityData = async () => {
  //为空时不搜索
  if (currentEntity.value === '') { return }
  console.log('3、获取实体数据');
  let { nodes, edges } = await useGetEntityData(currentEntity.value)
  searchData.nodes = nodes
  searchData.edges = edges
  //展示onsearch
  //单体
  if (nodes.length === 1) {
    searchState.isManyEntity = false
    searchState.isNotEntity = true
    searchState.isSearched = false
  }
  else {
    searchState.isManyEntity = false
    searchState.isSearched = true
    searchState.isNotEntity = false
  }
  //滚动一下屏幕,nexTick处理当输入单实体时,组件的高度在一瞬间为0
  nextTick(() => {
    toComponentView()
  })
  console.log('4、获得数据结束');
}
//监视currentEntity
watch(currentEntity, getEntityData)

</script>
 
<style scoped lang="less">
.top-container {
  background-color: #B721FF;
  background-image: linear-gradient(31deg, #d7a4ef 22%, #21D4FD 52%, #ffffff 86%);
  height:100vh;
}

.input-warpper {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding-top: 72px;
  color: #fff;

  p {
    font-size: 44px;
    line-height: 56px;
    padding: 0 40px 40px;
    width: 535px;
    color: #fff;
    text-align: center;
  }

  .input-box {
    min-width: 50%;
    height: 56px;
    border-radius: 30px;
    background-color: #fff;
    display: flex;
    align-items: center;
    z-index: 2;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 5%), 0 2px 4px 1px rgb(0 0 0 / 9%);
    border-left: 1px solid transparent;
    border-right: none;
    border-top: 1px solid transparent;
    border-bottom: 1px solid transparent;

    &:hover,
    &:focus-within {
      box-shadow: 0 0 0 1px rgb(0 0 0 / 10%), 0 2px 4px 1px rgb(0 0 0 / 18%);
      border-left: 1px solid transparent;
      border-right: none;
      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      .delete-icon {
        visibility: visible;
      }
    }

    input {
      height: 100%;
      width: 80%;
      border: none;
      outline: none;
      font-size: 18px;
      padding: 0 30px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      color: rgb(113, 109, 109);
    }

    .span-style() {
      display: block;
      height: 100%;
      width: 5%;
      z-index: 1;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
      text-align: center;
      line-height: 50px;
      padding-right: 5px;
      margin-right: 3%;

      .icon {
        height: 40%;

        vertical-align: middle;
      }
    }

    .delete-icon {
      visibility: hidden;
      .span-style;
    }

    .search-icon {
      .span-style;
    }
  }

  .input-example {
    display: flex;
    flex-wrap: wrap;
    max-width: 50%;

    li {
      display: block;
      border: 1px solid #fff;
      min-width: 70px;
      min-height: 30px;
      text-align: center;
      border-radius: 30px;
      margin-left: 5px;
      margin-top: 5px;
      line-height: 30px;
      padding: 0 5px;
    }
  }
}

// 内容展示区css
.content-warpper {
  background-color: #f7f7f7;
  // height: 100%;
  min-height: 500px;
}

.footer-warpper {
  background-color: #f7f7f7;
  padding: 48px 64px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-top: 10%;

  .left-logo {
    margin-left: 1%;
    display: flex;
    justify-items: center;
    align-items: center;

    img {
      vertical-align: middle;
      width: 45px;
    }

    span {
      margin: 0 20px;
      background-color: #8744E1;
      width: 10px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
    }

    p {
      font-size: 20px;
      width: 100%;
    }
  }

  .right-description {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 20%;
    padding-left: 20px;
    padding-top: 3px;

    li {
      flex-grow: 1;
      margin: 12px 0;
      font-size: 16px;
      line-height: normal;
      color: #697b8c;
      font-family: 'Roboto', 'Heebo', Arial, sans-serif;

      &:hover {
        color: #8744E1;
      }
    }
  }
}
</style>