<template>
    <div ref="currentNode" class="currentNode">
    </div>
</template>
 
 
<script lang='ts' setup>
import { Graph, GraphData } from '@antv/g6'
import { ref, reactive, onMounted, watch, toRaw, onUnmounted } from 'vue'
import useGraph from '../../hooks/useGraph'
const currentNode = ref()
const props = defineProps({
    data: {
        required: true,
    },
    options: {
        type: Object,
        required: false,
    },
    plugins: {
        required: false,
        type: Object,
    },
    minimapszie:{
        required: false,
        type:Array,
    }
})
//绘图实例
let graph: any
//调整窗口回调
const reDraw = () => {
    let internalID: any = null
    return () => {
        clearTimeout(internalID);
        internalID = setTimeout(
            () => {
                console.log('尺寸改变');
                if (!currentNode.value || !currentNode.value.scrollWidth || !currentNode.value.scrollHeight) return;
                graph.destroy()
                graph = useGraph(currentNode, props)
                drawGraph(graph)
            }
            , 1000)
    }
}

onMounted(() => {
    graph = useGraph(currentNode, props)
    drawGraph(graph);
    if (typeof window !== 'undefined')
        window.addEventListener('resize', reDraw())
})
onUnmounted(() => {
    if (typeof window !== 'undefined')
        window.removeEventListener('resize', reDraw())
})
// 渲染画图函数
const drawGraph = (graph: Graph) => {
    const tempData = toRaw(props.data)
    graph.data(tempData as GraphData); // 读取 Step 2 中的数据源到图上
    graph.render(); // 渲染图
}
// 改变数据时调用渲染函数
watch(props.data as any, () => {
    console.log('改变data渲染', props.data);
    drawGraph(graph);
})
</script>
 
<style scoped lang="less">
.currentNode {
    height: 100%;
    width: 100%;
    position: relative;
}
</style>