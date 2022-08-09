type methods = 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
type handleOnloadHook = (result: node[]) => void
import type {node,edge} from './useGraphData'
const reader = new FileReader()
/**
 * @des 此hook封装FileReader对象，实现传入方法、文件、支持完成时回调
 * @param method 方法非必须
 * @param handleOnload  文件读取完成时回调 必须
 * @param file 需要读取的文件
 * @returns 文件内容
 */
export const useFileReader = (file: any, handleOnload: handleOnloadHook, method: methods = 'readAsText') => {
    reader.onload = e => {
        let result = e.target?.result as string;
        let r: node[] = []
        result.split('\r\n').map((value, index) => {
            r.push({
                id: String(index),
                label: value
            })
        })
        handleOnload(r)        
    }
    reader[method](file)

}
