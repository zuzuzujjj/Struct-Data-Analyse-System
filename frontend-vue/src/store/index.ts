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
  connections: any[];
}

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
      alReadyAnnotationData: [] as string[][], //annotationData of the annotation
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
              label: item.text+'--地点'
            })
            break;
          case "I—LOC":
            temp.push({
              value: item.id,
              label: item.text+'--词的中间'
            })
            break;
          case "B—PER":
            temp.push({
              value: item.id,
              label: item.text+'--人物'
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
              label: item.text+'--组织'
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
              label: item.text+'--其它'
            })
            break;
        }

      })
      return temp
    },
    getCurrentEntityType(state) {
      return (index: number) => {
        return state.annotationData[0].labelCategories[index].text
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
    addAlReadyAnnotationData(alReadyannotationData: string[]) {
      this.alReadyAnnotationData.push(alReadyannotationData)
    }
  }

})
