import request from '@/utils/axios/request'

// 播放页 - 获取歌曲详情
export const getSongById = (id) =>
  request({
    url: `/song/detail?ids=${id}`,
    method: 'GET'
  })

// 播放页 - 获取歌词
export const getLyricById = (id) =>
  request({
    url: `/lyric?id=${id}`,
    method: 'GET'
  })
