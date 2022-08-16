type annotationDataType = {
  content: string;
  labelCategories: {
    id: number;
    text: string;
    color: string;
    borderColor: string;
  }[];
  labels: { id: number; categoryId: number; startIndex: number; endIndex: number }[];
  connectionCategories: {
    id: number;
    text: string;
  }[];
  connections: { id: number; categoryId: number; fromId: number; toId: number }[];
}
import { node, edge } from '@/hooks/useGraphData'
import { reactive } from 'vue';
import { defineStore } from "pinia" // 定义容器
/**
 * @des 使用标注的状态管理
 */
export const useAnnotation = defineStore('useAnnotation', {
  /**
   * 存储全局状态
   * 1.必须是箭头函数: 为了在服务器端渲染的时候避免交叉请求导致数据状态污染
   * 和 TS 类型推导
  */
  state: () => {
    return {
      fileName: [] as string[], // name of the file name
      fileNameContent: [] as string[], // content of the file
      annotationData: [] as annotationDataType[], //annotationData of the annotation
      alReadyAnnotationData: [] as { id: number; text: string; type: string }[][], //annotationData of the annotation
      alReadyAnnotationConnection: [] as { id: number; fromId: number; toId: number; type: string }[][],//annotationConnections of the annotation
    }
  },
  getters: {
    /**
     * 
     * @param state 
     * @returns 文件选择菜单
     */
    getFileIndexSelectOptions(state) {
      let temp: { value: number; label: string }[] = []
      state.fileName.forEach((item, index) => {
        temp.push({
          value: index,
          label: item
        })
      })
      return temp
    },
    /**
     * 
     * @param state 
     * @returns 实体类型选择菜单
     */
    getEntityTypeSelectOptions(state) {
      let temp: { value: number; label: string }[] = []
      state.annotationData[0].labelCategories.forEach((item) => {
        switch (item.text) {
          case "B—LOC":
            temp.push({
              value: item.id,
              label: item.text + '--地点'
            })
            break;
          case "I—LOC":
            temp.push({
              value: item.id,
              label: item.text + '--词的中间'
            })
            break;
          case "B—PER":
            temp.push({
              value: item.id,
              label: item.text + '--人物'
            })
            break;
          case "I—PER":
            temp.push({
              value: item.id,
              label: item.text
            })
            break;
          case "B—ORG":
            temp.push({
              value: item.id,
              label: item.text + '--组织'
            })
            break;
          case "I—ORG":
            temp.push({
              value: item.id,
              label: item.text
            })
            break;
          case "O":
            temp.push({
              value: item.id,
              label: item.text + '--其它'
            })
            break;
        }

      })
      return temp
    },
    /**
     * 
     * @param state 
     * @returns 实体类型关系选择菜单
     */
    getConnectionTypeSlectOptions(state) {
      return (fileIndex: number) => {
        let temp: { value: number; label: string }[] = []
        state.annotationData[fileIndex].connectionCategories.forEach((item) => {
          temp.push({
            value: item.id,
            label: item.text
          })
        })
        return temp
      }
    },
    /**
     * 
     * @param state 
     * @returns 返回索引所代表的的标签值
     */
    getCurrentEntityType(state) {
      return (index: number) => {
        return state.annotationData[0].labelCategories[index].text
      }
    },
    /**
     * 
     * @param state 
     * @returns 返回索引所代表的关系值
     */
    getCurrentConnnectionType(state) {
      return (index: number, fileIndex: number) => {
        return state.annotationData[fileIndex].connectionCategories[index].text
      }
    },
    /**
     * 
     * @param state 
     * @returns 返回 entity connect entity 对象
     */
    getTriplet(state) {
      return (fileIndex: number) => {
        let triplet: { id: number; start: string; connection: string; end: string }[] = []
        state.alReadyAnnotationConnection[fileIndex].forEach((item) => {
          let temp: { id: number; start: string; connection: string; end: string } = {
            id: -1,
            start: '',
            connection: '',
            end: '',
          }
          for (let index = 0; index < state.alReadyAnnotationData[fileIndex].length; index++) {
            if (item.fromId === state.alReadyAnnotationData[fileIndex][index].id) {
              temp.start = state.alReadyAnnotationData[fileIndex][index].text
              break
            }
          }
          for (let index = 0; index < state.alReadyAnnotationData[fileIndex].length; index++) {
            if (item.toId === state.alReadyAnnotationData[fileIndex][index].id) {
              temp.end = state.alReadyAnnotationData[fileIndex][index].text
              break
            }
          }
          temp.connection = item.type
          temp.id = item.id
          triplet.push(temp)
        })
        return triplet
      }
    },
    getCreateNodes(state) {
      return (fileIndex: number) => {
        let currentNodes: node[] = []
        state.alReadyAnnotationData[fileIndex].forEach((item) => {
          currentNodes.push({
            id: String(item.id),
            label: item.text
          })
        })
        return currentNodes
      }

    },
    getCreateEdges(state) {
      return (fileIndex: number) => {
        let currentEdges: edge[] = []
        state.alReadyAnnotationConnection[fileIndex].forEach((item) => {
          currentEdges.push({
            source: String(item.fromId),
            target: String(item.toId),
            label: item.type
          })
        })
        return currentEdges
      }
    },
    getGraphData(state) {
      return (fileIndex: number) => {
        let currentNodes: node[] = []
        state.alReadyAnnotationData[fileIndex].forEach((item) => {
          currentNodes.push({
            id: String(item.id),
            label: item.text
          })
        })
        let currentEdges: edge[] = []
        state.alReadyAnnotationConnection[fileIndex].forEach((item) => {
          currentEdges.push({
            source: String(item.fromId),
            target: String(item.toId),
            label: item.type
          })
        })
        return {
          nodes: currentNodes,
          edges: currentEdges
        }
      }
    }

  },
  actions: {
    /**
     * 
     * @param name 文件名
     */
    addFileName(name: string) {
      this.fileName.push(name);
    },
    /**
     * 
     * @param content 文本内容
     */
    addFileNameContent(content: string) {
      this.fileNameContent.push(content)
    },
    /**
     * 
     * @param annotationDataObject 传入的annotationData对象
     */
    addAnnotationData(annotationDataObject: any) {
      this.annotationData.push(annotationDataObject)
    },
    /**
     * 
     * @param alReadyannotationData 传入的标注实体对象
     */
    addAlReadyAnnotationData(alReadyannotationData: { id: number; text: string; type: string }[]) {
      this.alReadyAnnotationData.push(alReadyannotationData)
    },
    /**
     * 
     * @param AlReadyAnnotationConnection 传入标注的关系对象
     */
    addAlReadyAnnotationConnection(AlReadyAnnotationConnection: { id: number; fromId: number; toId: number; type: string }[]) {
      this.alReadyAnnotationConnection.push(AlReadyAnnotationConnection)
    }
  }

})
