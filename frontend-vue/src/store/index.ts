import { node ,edge} from "@/hooks/useGraphData";
import { defineStore } from "pinia" // 定义容器

export const useStructData = defineStore('useStructData', {
  /**
   * 存储全局状态
   * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染
   * 和 TS 类型推导
  */
  state: () => {
    return {
      dataName: [] as string[], // name of the file name
      dataEntity: [] as node[][], // data of the entities
      dataEdge: [] as edge[][] //data of the edges
    }
  },
  getters: {

  },
  actions: {
    addDataName(name: string|number){
      this.dataName.push(name as string);
    },
    addDataEntity(entity:node[]){
      this.dataEntity.push(entity)
    },
    addDataEdge(edge:edge[]){
      this.dataEdge.push(edge)
    }
  }

})
