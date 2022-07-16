<template>
  <div class="top-container">
    <Header></Header>
    <div class="input-warpper">
      <!-- 背景标题 -->
      <p class="animate__animated animate__fadeInDown">强大的图数据搜索与可视化系统</p>
      <!-- 输入框 -->
      <div class="input-box animate__animated animate__fadeIn">
        <input type="text" placeholder="输入搜索词或主题" v-model="inputSearch" @keyup.enter="getSearch">
        <span @click="inputSearch = ''" class="delete-icon"><svg t="1657855668772" class="icon" viewBox="0 0 1024 1024"
            version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5125">
            <path
              d="M547.2 512l416-416c9.6-9.6 9.6-25.6 0-35.2s-25.6-9.6-35.2 0l-416 416-416-416c-9.6-9.6-25.6-9.6-35.2 0s-9.6 25.6 0 35.2l416 416-416 416c-9.6 9.6-9.6 25.6 0 35.2s25.6 9.6 35.2 0l416-416 416 416c9.6 9.6 25.6 9.6 35.2 0s9.6-25.6 0-35.2L547.2 512z"
              p-id="5126"></path>
          </svg></span>
        <span @click="getSearch" class="search-icon">
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
  <div class="content-warpper">
    <!-- 没搜索时显示这个 -->
    <NotSearch v-if="notSearch"></NotSearch>
    <!-- 搜索了时显示搜索内容 -->
  </div>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'
import NotSearch from './components/NotSearch.vue'
import { ref, reactive, nextTick, onMounted } from 'vue'

//输入逻辑块
let inputSearch = ref<string | number>('')
let inputExample = reactive<string[]>(['李白', '肚皮', '白居易', '笑笑', '苦苦', '修行子', '列书', '永生'])
let getSearch = () => {
  //Ajax请求
  alert(inputSearch.value)

}
//展示内容逻辑块
let notSearch= ref<boolean>(true)
</script>
 
<style scoped lang="less">
.top-container {
  background-color: #B721FF;
  background-image: linear-gradient(31deg, #d7a4ef 22%, #21D4FD 52%, #ffffff 86%);

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
    }
  }
}
</style>