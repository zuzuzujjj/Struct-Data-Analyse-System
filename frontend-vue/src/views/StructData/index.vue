<template>
  <div>
    <Header></Header>
    <div class="input-warpper">
      <!-- 背景标题 -->
      <h2>强大的图数据搜集与可视化系统</h2>
      <!-- 输入框 -->
      <div class="input-box">
        <input type="text" placeholder="输入搜索词或主题" v-model="inputSearch" >
        <span @click="getSearch">111</span>
      </div>
      <!-- 示例 -->
      <ul class="input-example">
        <li @click="inputSearch=item" v-for="(item,index) in inputExample" :key="index">{{item}}</li>
      </ul>
    </div>
  </div>
  <div class="content-warpper">
    
  </div>
</template>
 
 
<script lang='ts' setup>
import Header from '../../components/Header/index.vue'

import { ref, reactive } from 'vue'
//输入逻辑块
let inputSearch = ref<string | number>('')
let inputExample=reactive<string[]>(['李白','肚皮','白居易','笑笑','苦苦','修行子','列书','永生'])
let getSearch = () => {
  //Ajax请求
  alert(inputSearch.value)
}

</script>
 
<style scoped lang="less">
.input-warpper {
  width: 100%;
  height: 400px;
  background-color: rgb(233, 185, 246);
  display: flex;
  flex-direction: column;
  align-items: center;

  .input-box {
    min-width: 50%;
    min-height: 56px;
    border-radius: 30px;
    background-color: aliceblue;
    display: flex;
    align-items: center;
    z-index: 2;

    input {
      height: 100%;
      width: 80%;
      border: none;
      outline: none;
      font-size: 18px;
      padding: 0 30px;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
    }

    span {
      display: inline-block;
      height: 100%;
      width: 10%;
      z-index: 1;
      border-top-right-radius: 30px;
      border-bottom-right-radius: 30px;
    }
  }

  .input-example {
    display: flex;
    flex-wrap: wrap;
    max-width: 50%;

    li {
      display: block;
      border: 1px solid #bfa;
      min-width: 70px;
      min-height: 30px;
      text-align: center;
      border-radius: 30px;
    }
  }
}
</style>