import request from '@/utils/axios/request'

/**
 * 首页 - 推荐歌单接口
 * @param {*} params
 * @returns Promise对象
 */
export const recommendMusic = (params) =>
  // 这里省略掉return{ }, 直接采用简写形式
  request({
    url: '/personalized',
    params
    // 这里是params: {params}的简写，其中params是一个对象
    // 将来外面可能传入params的值 {limit: 20}
  })
