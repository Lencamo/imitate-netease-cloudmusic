import request from '@/utils/axios/request'

/**
 * 搜索页 - 热搜关键字接口
 * @param {*} params
 * @returns Promsie
 */
export const hotSearch = (params) =>
  request({
    url: '/search/hot',
    params
  })
