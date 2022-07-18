<template>
    <div class="card-container">
        <div class="topdescription">
            <p>
                XXX
            </p>
            <p>
                XXXXX
            </p>
        </div>
        <div class="bottom-graph">
            <std-graph :data="data" :plugins="['minimap']" :minimapszie="[150,100]"></std-graph>
        </div>
    </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
import useGraphData from '../../../hooks/useGraphData'
let nodes = [
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
let edges = [
    {
        source: 'node1', // String，必须，起始点 id
        target: 'node2', // String，必须，目标点 id
    },
]
let data = useGraphData(nodes, edges)

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
    .bottom-graph {
        height: 60%;
    }
}
</style>