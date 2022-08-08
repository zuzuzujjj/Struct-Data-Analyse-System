<template>
  <div class="onsearch-warpper">
    <div class="onsearch-content">
      <!-- 左菜单 -->
      <section class="left-menus animate__animated animate__bounceInLeft">
        left-menus
      </section>
      <!-- 内容展示区 -->
      <main class="show-content animate__animated animate__fadeInDown">
        <!-- 图区域 -->
        <div class="graph-content">
          <!-- 标题 -->
          <div class="title-show ">
            {{ currentEntity }}
          </div>
          <!-- 图 -->
          <div class="graph-show">
            <std-graph :data="defaultData" :plugins="['minimap',]" :minimapszie="[150, 100]"></std-graph>
          </div>
        </div>
        <!-- 数据 -->
        <div class="entity-data-content ">
        </div>
      </main>
      <!-- 右菜单 -->
      <section class="right-menus animate__animated animate__bounceInRight">
        right-menus
      </section>
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

  .onsearch-content {
    height: 100%;
    padding: 1% 2%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    //通用的卡片状css
    .card-common-css() {
      box-shadow: 0 2px 2px 1px rgb(0 0 0 / 7%), 0 2px 2px 2px rgb(0 0 0 / 6%), 0 2px 2px 0 rgb(0 0 0 / 10%);
      border-radius: 5px;
      background: #fff;
      margin-bottom: 8px;
    }

    // 左菜单
    .left-menus {
      width: 20%;
      min-height: 700px;
      margin-right: 1%;
      .card-common-css;
    }

    //右菜单
    .right-menus {
      width: 20%;
      min-height: 700px;
      margin-left: 1%;
      .card-common-css;
    }

    //展示内容
    .show-content {
      width: 80%;
      min-height: 800px;

      .graph-content {
        min-height: 800px;
        height: 100%;
        width: 100%;

        //标题
        .title-show {
          height: 100px;
          .card-common-css;
        }

        // 图展示
        .graph-show {
          width: 100%;
          height: 750px;
          // flex-grow: 1;
          .card-common-css;
        }

        //数据
        .entity-data-show {
          height: 20%;
          .card-common-css;
        }
      }

      .entity-data-content {
        min-height: 500px;
        .card-common-css;
      }
    }

  }
}
</style>