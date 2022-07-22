<template>
    <div class="card-container">
        <div class="topdescription">
          <slot></slot>
        </div>
        <div class="bottom-graph">
            <std-graph :data="data" :plugins="['minimap']" :minimapszie="[150, 100]" :options="options"></std-graph>
        </div>
    </div>
</template>
 
 
<script lang='ts' setup>
import { ref, reactive } from 'vue'
import StdGraph from '@/components/StdGraph/index.vue'
import useGraphData from '@/hooks/useGraphData'
// let nodes = [
//     {
//         id: 'node1', // String，该节点存在则必须，节点的唯一标识
//         label: "Circle1",
//         x: 100, // Number，可选，节点位置的 x 值
//         y: 200, // Number，可选，节点位置的 y 值
//     },
//     {
//         id: 'node2', // String，该节点存在则必须，节点的唯一标识
//         label: "Circle2",
//         x: 300, // Number，可选，节点位置的 x 值
//         y: 200, // Number，可选，节点位置的 y 值
//     },
// ]
// let edges = [
//     {
//         source: 'node1', // String，必须，起始点 id
//         target: 'node2', // String，必须，目标点 id
//     },
// ]
// let data = useGraphData(nodes, edges)
const data = {
    nodes: [
        {
            id: '0',
            label: '0',
        },
        {
            id: '1',
            label: '1',
        },
        {
            id: '2',
            label: '2',
        },
        {
            id: '3',
            label: '3',
        },
        {
            id: '4',
            label: '4',
        },
        {
            id: '5',
            label: '5',
        },
        {
            id: '6',
            label: '6',
        },
        {
            id: '7',
            label: '7',
        },
        {
            id: '8',
            label: '8',
        },
        {
            id: '9',
            label: '9',
        },
        {
            id: '10',
            label: '10',
        },
        {
            id: '11',
            label: '11',
        },
        {
            id: '12',
            label: '12',
        },
        {
            id: '13',
            label: '13',
        },
        {
            id: '14',
            label: '14',
        },
        {
            id: '15',
            label: '15',
        },
        {
            id: '16',
            label: '16',
        },
        {
            id: '17',
            label: '17',
        },
        {
            id: '18',
            label: '18',
        },
        {
            id: '19',
            label: '19',
        },
        {
            id: '20',
            label: '20',
        },
        {
            id: '21',
            label: '21',
        },
        {
            id: '22',
            label: '22',
        },
        {
            id: '23',
            label: '23',
        },
        {
            id: '24',
            label: '24',
        },
        {
            id: '25',
            label: '25',
        },
        {
            id: '26',
            label: '26',
        },
        {
            id: '27',
            label: '27',
        },
        {
            id: '28',
            label: '28',
        },
        {
            id: '29',
            label: '29',
        },
        {
            id: '30',
            label: '30',
        },
        {
            id: '31',
            label: '31',
        },
        {
            id: '32',
            label: '32',
        },
        {
            id: '33',
            label: '33',
        },
    ],
    edges: [
        {
            source: '0',
            target: '1',
        },
        {
            source: '0',
            target: '2',
        },
        {
            source: '0',
            target: '3',
        },
        {
            source: '0',
            target: '4',
        },
        {
            source: '0',
            target: '5',
        },
        {
            source: '0',
            target: '7',
        },
        {
            source: '0',
            target: '8',
        },
        {
            source: '0',
            target: '9',
        },
        {
            source: '0',
            target: '10',
        },
        {
            source: '0',
            target: '11',
        },
        {
            source: '0',
            target: '13',
        },
        {
            source: '0',
            target: '14',
        },
        {
            source: '0',
            target: '15',
        },
        {
            source: '0',
            target: '16',
        },
        {
            source: '2',
            target: '3',
        },
        {
            source: '4',
            target: '5',
        },
        {
            source: '4',
            target: '6',
        },
        {
            source: '5',
            target: '6',
        },
        {
            source: '7',
            target: '13',
        },
        {
            source: '8',
            target: '14',
        },
        {
            source: '9',
            target: '10',
        },
        {
            source: '10',
            target: '22',
        },
        {
            source: '10',
            target: '14',
        },
        {
            source: '10',
            target: '12',
        },
        {
            source: '10',
            target: '24',
        },
        {
            source: '10',
            target: '21',
        },
        {
            source: '10',
            target: '20',
        },
        {
            source: '11',
            target: '24',
        },
        {
            source: '11',
            target: '22',
        },
        {
            source: '11',
            target: '14',
        },
        {
            source: '12',
            target: '13',
        },
        {
            source: '16',
            target: '17',
        },
        {
            source: '16',
            target: '18',
        },
        {
            source: '16',
            target: '21',
        },
        {
            source: '16',
            target: '22',
        },
        {
            source: '17',
            target: '18',
        },
        {
            source: '17',
            target: '20',
        },
        {
            source: '18',
            target: '19',
        },
        {
            source: '19',
            target: '20',
        },
        {
            source: '19',
            target: '33',
        },
        {
            source: '19',
            target: '22',
        },
        {
            source: '19',
            target: '23',
        },
        {
            source: '20',
            target: '21',
        },
        {
            source: '21',
            target: '22',
        },
        {
            source: '22',
            target: '24',
        },
        {
            source: '22',
            target: '25',
        },
        {
            source: '22',
            target: '26',
        },
        {
            source: '22',
            target: '23',
        },
        {
            source: '22',
            target: '28',
        },
        {
            source: '22',
            target: '30',
        },
        {
            source: '22',
            target: '31',
        },
        {
            source: '22',
            target: '32',
        },
        {
            source: '22',
            target: '33',
        },
        {
            source: '23',
            target: '28',
        },
        {
            source: '23',
            target: '27',
        },
        {
            source: '23',
            target: '29',
        },
        {
            source: '23',
            target: '30',
        },
        {
            source: '23',
            target: '31',
        },
        {
            source: '23',
            target: '33',
        },
        {
            source: '32',
            target: '33',
        },
    ],
};
const options = {
    modes: {
        default: ['drag-canvas', 'drag-node'],
    },
    layout: {
        type: 'radial',
        unitRadius: 70,
        preventOverlap: true,
        strictRadial: false,
    },
    animate: true,
    defaultNode: {
        size: 20,
    },
    defaultEdge: {
        style: {
            endArrow: {
                path: 'M 0,0 L 8,4 L 8,-4 Z',
                fill: '#e2e2e2',
            },
        },
    },
}
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