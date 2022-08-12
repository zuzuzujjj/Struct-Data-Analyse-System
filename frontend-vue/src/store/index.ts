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
    }
  },
  getters: {

  },
  actions: {
    /**
     * 
     * @param name 文件名
     */
    addFileName(name: string){
      this.fileName.push(name);
    },
    /**
     * 
     * @param content 文本内容
     */
    addFileNameContent(content: string){
      this.fileNameContent.push(content)
    }
  }

})
