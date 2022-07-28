<template>
  <div class="onsearch-warpper">
    <div class="onsearch-content">
      <div class="graph-content">
        <!-- 标题 -->
        <div class="title-show animate__animated animate__fadeInLeft">
          {{ currentEntity }}
        </div>
        <!-- 图 -->
        <div class="graph-show animate__animated animate__fadeInLeft">
          <std-graph :data="defaultData" :plugins="['minimap']" :minimapszie="[150, 100]"></std-graph>
        </div>
        <!-- 数据 -->
        <div class="entity-data-show animate__animated animate__fadeInLeft">
        </div>
      </div>
      <div class="right-warpper">
        <div class="title-menus animate__animated animate__fadeInRight">
          标题
        </div>
        <div class="menus-1 animate__animated animate__fadeInRight">
          菜单一
        </div>
        <div class="menus-2 animate__animated animate__fadeInRight">
          菜单二
        </div>
      </div>
    </div>

  </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, inject, onMounted } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
defineProps(['currentEntity'])
let defaultData = inject('searchData')
</script>
 
<style scoped lang="less">
.onsearch-warpper {
  width: 100%;
  height: 1000px;

  .onsearch-content {
    height: 100%;
    padding: 1% 2%;
    display: flex;
    justify-content: center;

    //通用的卡片状css
    .card-common-css() {
      box-shadow: 0 2px 2px 1px rgb(0 0 0 / 7%), 0 2px 2px 2px rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 10%);
      border-radius: 5px;
      background: #fff;
      margin-bottom: 8px;
    }

    .graph-content {
      height: 100%;
      width: 70%;
      display: flex;
      flex-direction: column;
      justify-content:flex-start;
      margin-right: 5px;

      //标题
      .title-show {
        height: 5%;
        .card-common-css;
      }

      // 图展示
      .graph-show {
        width: 100%;
        height: 50%;
        .card-common-css;
        flex-grow: 1;
      }

      //数据
      .entity-data-show {
        height:20%;
        .card-common-css;
      }
    }

    .right-warpper {
      width: 30%;
      height: 100%;
      display: flex;
      flex-direction: column;

      .title-menus {
        height: 100px;
        .card-common-css;
      }

      .menus-1 {
        height: 45%;
        .card-common-css;
      }

      .menus-2 {
        height: 25%;
        .card-common-css;

      }
    }
  }
}
</style>