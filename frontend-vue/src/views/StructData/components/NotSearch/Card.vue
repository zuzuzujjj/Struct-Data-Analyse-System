<template>
    <div class="card-container">
        <div class="topdescription">
          <slot></slot>
        </div>
        <div class="bottom-graph">
            <std-graph :data="defaultData" :plugins="['minimap']" :minimapszie="[150, 100]" ></std-graph>
        </div>
    </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive, onMounted,inject } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
let defaultData=inject('searchData')
</script>
 
<style scoped lang="less">
.card-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .12);
    height: 100%;
    width: 100%;
    padding: 32px;
    border-radius: 10px;

    &:hover {
        box-shadow: 0 8px 10px 1px rgb(0 0 0 / 7%), 0 3px 14px 3px rgb(0 0 0 / 6%), 0 4px 5px 0 rgb(0 0 0 / 10%);
    }
    .topdescription{
        flex-grow: 1;
    }
    .bottom-graph {
        height: 60%;
        flex-grow: 2;
    }
}
</style>