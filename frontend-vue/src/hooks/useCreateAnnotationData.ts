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
                "text": "B-LOC",
                "color": "#eac0a2",
                "borderColor": "#a38671"
            },
            {
                "id": 1,
                "text": "B-ORG",
                "color": "#619dff",
                "borderColor": "#436db2"
            },
            {
                "id": 2,
                "text": "I-LOC",
                "color": "#9d61ff",
                "borderColor": "#6d43b2"
            },
            {
                "id": 3,
                "text": " I-ORG",
                "color": "#ff9d61",
                "borderColor": "#b26d43"
            }
        ],
        labels: [] as any[],
        connectionCategories: [
            {
                "id": 0,
                "text": "某种关系"
            },
        ],
        connections: [] as any[],
    }
    annotationDataObject.content = fileContent
    return annotationDataObject
}