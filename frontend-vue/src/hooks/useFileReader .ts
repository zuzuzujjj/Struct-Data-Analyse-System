type methods = 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
type handleOnloadHook = (result: any) => void

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
        handleOnload(e.target?.result)
    }
    reader[method](file)

}
