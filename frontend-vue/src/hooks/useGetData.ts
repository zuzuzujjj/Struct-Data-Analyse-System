import { getEntity, getNodes } from '@/api/getFromCndb'

/**
 * @des 返回所有实体型
 * @param mention 实体型
 * @returns 返回所有的实体型数组
 */
export const useGetEntity = async (mention: any) => {
    let temp: any = await getEntity(mention)
    /**其它接口 */
    return [...temp]
}

/**
 * @des 获得所有接口的三元组，返回最多的边和点
 * @param mention 实体型
 * @returns 返回具有最多的节点和边
 */
export const useGetEntityData = async (mention: any) => {
    let { nodes, edges } = await getNodes(mention)
    /**其它接口 */
    return {
        nodes,
        edges
    }
}