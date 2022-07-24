//创建图数据的hook
export interface node {
    /**
    * 节点的唯一标识
    */
    id: string; 
    /**
    * 节点横坐标
    */
    x?: number; 
    y?: number; //, // 节点纵坐标
    label?: string; // 节点文本
    [propname:string]:any;//其它内容
}
export interface edge {
    source: string, // 起始点 id
    target: string, // 目标点 id
    label?: string; //, // 边的文本
    [propname:string]:any; //其它内容
}
import {reactive} from 'vue';
export default (nodes:node[], edges:edge[]) => {
    return reactive({
        nodes,
        edges
    })
}