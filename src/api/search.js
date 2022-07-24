import request from '@/utils/axios/request'

/**
 * 搜索页 - 热搜关键字接口
 * @param {*} params
 * @returns Promsie对象
 */
export const hotSearch = (params) =>
  request({
    url: '/search/hot',
    params
  })

/**
 * 搜索页 - 搜索结果接口
 * @param {*} params
 * @returns Promise对象
 */
export const searchResultList = (params) =>
  request({
    url: '/cloudsearch',
    params
  })
