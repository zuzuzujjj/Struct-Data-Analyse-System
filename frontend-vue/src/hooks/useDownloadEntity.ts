/**
 * 
 * @param content 导出内容一维数组
 * @param name 导出名字
 */
export const useDownloadEntity=(content:string[],name:string)=>{
        let temp:string[]=content.map((item)=>{
           return item+'\n'
        })
        const blob = new Blob(temp, { type: 'text/plain,charset=UTF-8' });
        const downloadElement = document.createElement('a');
        // 创建下载链接
        const href = window.URL.createObjectURL(blob);
        downloadElement.href = href;
        // 下载文件名
        downloadElement.download = `${name}.txt`;
        document.body.appendChild(downloadElement);
        downloadElement.click();
        // 移除元素
        document.body.removeChild(downloadElement);
        // 释放blob对象
        window.URL.revokeObjectURL(href);
}