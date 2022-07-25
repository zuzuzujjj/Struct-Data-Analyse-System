/**
 * @des 此hook用来封装所有的api接口，
 * @parma {mention} 实体型
 * @return 返回具有最大节点数的数据和边
 */
import { getEntity, getNodes } from '@/api/getFromCndb'

export const useGetEntity = async (mention: any) => {
    let temp: any = await getEntity(mention)
    /**其它接口 */
    return [...temp]
}

export const useGetEntityData = async (mention: any) => {
    let { nodes, edges } = await getNodes(mention)
    /**其它接口 */
    return {
        nodes,
        edges
    }
}