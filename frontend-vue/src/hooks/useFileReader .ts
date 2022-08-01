type methods = 'readAsBinaryString' | 'readAsDataURL' | 'readAsText'
type handleOnloadHook = (result: string[]) => void

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
        let r: string[] = []
        result.split('\r\n').map((value, index) => {
            r.push(value)
        })
        handleOnload(r)
    }
    reader[method](file)

}
