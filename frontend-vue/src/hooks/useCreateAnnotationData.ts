/**
 * 
 * @param fileContent 传入的文本内容
 * @returns 返回annotationDataObject格式对象
 */
export const useCreateAnnotationData = (fileContent: string) => {
    //标注的数据格式
    let annotationDataObject = {
        content: '',
        labelCategories: [
            {
                "id": 0,
                "text": "demo1",
                "color": "#eac0a2",
                "borderColor": "#a38671"
            },
            {
                "id": 1,
                "text": "demo2",
                "color": "#619dff",
                "borderColor": "#436db2"
            },
        ],
        labels: [] as any,
        connectionCategories: [
            {
                "id": 0,
                "text": "某种关系"
            },
        ],
        connections: [] as any,
    }
    annotationDataObject.content=fileContent
    console.log('chuang',annotationDataObject);
    
    return annotationDataObject
}