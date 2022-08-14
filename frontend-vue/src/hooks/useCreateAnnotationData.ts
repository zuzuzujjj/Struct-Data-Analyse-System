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
                "text": "B—LOC",
                "color": "#eac0a2",
                "borderColor": "#a38671"
            },
            {
                "id": 1,
                "text": "I—LOC",
                "color": "#619dff",
                "borderColor": "#436db2"
            },
            {
                "id": 2,
                "text": "B—PER",
                "color": "#9d61ff",
                "borderColor": "#6d43b2"
            },
            {
                "id": 3,
                "text": "I—PER",
                "color": "#ff9d61",
                "borderColor": "#b26d43"
            },
            {
                "id": 4,
                "text": "B—ORG",
                "color": "#FD0A01",
                "borderColor": "#b26d43"
            },
            {
                "id": 5,
                "text": "I—ORG",
                "color": "#3AE86B",
                "borderColor": "#b26d43"
            },
            {
                "id": 6,
                "text": "O",
                "color": "#F32F71",
                "borderColor": "#b26d43"
            }
        ],
        labels: [] as {id:number;categoryId:number;startIndex:number;endIndex:number}[],
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