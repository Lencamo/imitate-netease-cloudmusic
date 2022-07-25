import request from '@/utils/axios/request'

/**
 * 评论页 - 歌曲评论接口
 * @param {*} params
 * @returns Promise对象
 */
export const getCommentList = (params) =>
  request({
    url: '/comment/music',
    params
  })
