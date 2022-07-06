<template>
  <header class="top-header">
    <div class="top-container">
      <div class="top-left-container">
        <a href="">
          <img src="../image/logo2.png" alt="logo">
        </a>
        <span>
        </span>
        <h2>
          知识图谱
        </h2>
      </div>
      <nav class="top-nav-container">
        <div class="search">
          <el-input placeholder="Type something" :prefix-icon="Search" />
        </div>
        <ul class="menus">
          <li>文档</li>
          <li>结构化数据</li>
          <li>数据分析</li>
          <li>其他</li>
        </ul>
      </nav>
    </div>
  </header>

</template>
 
 
<script lang='ts' setup>
import { Search } from '@element-plus/icons-vue'
import { ref, reactive } from 'vue'


</script>
 
<style scoped lang="less">
.top-header {
  width: 100%;
  background-color: #fff;
  border-bottom:1px solid rgba(0, 0, 0, 0.3);
}

.top-container {
  display: flex;
  height: 64px;
  align-items: center;
  justify-content: space-between;
  line-height: 64px;
  margin: 0 40px;

  .top-left-container {
    height: 100%;
    line-height: 64px;
    text-align: center;
    display: flex;
    justify-items: center;
    align-items: center;

    img {
      vertical-align: middle;
      width: 75%;
      color: black;
    }

    &>span {
      margin: 0 20px;
      background-color: #ccc;
      width: 1px;
      height: 24px;
      display: inline-block;
      vertical-align: middle;
    }

    &>h2 {
      font-size: 18px;
      margin: 0;
      white-space: nowrap;
    }
  }

  .top-nav-container {
    display: flex;
    align-items: center;

    .search {
      margin-right: 28px;

    }

    .menus {
      display: flex;
      justify-content: center;
      align-items: center;

      li {
        display: block;
        margin-right: 28px;
        color: #697b8c;

        &:hover {
          color: #9f5fdb;

        }
      }
    }
  }
}
</style>