import { recommendMusic, newestMusic } from './home'
import { hotSearch, searchResultList } from './search'
import { getCommentList } from './comment'

import { getSongById, getLyricById } from './Play'

export const recommendMusicAPI = recommendMusic // 首页 - 推荐歌单接口
export const newestMusicAPI = newestMusic // 首页 - 推荐最新音乐接口

export const hotSearchAPI = hotSearch // 搜索页 - 热搜关键字接口
export const searchResultListAPI = searchResultList // 搜索页 - 搜索结果接口

export const getCommentListAPI = getCommentList // 评论页 - 歌曲评论接口

export const getSongByIdAPI = getSongById // 歌曲 - 播放地址
export const getLyricByIdAPI = getLyricById // 歌曲 - 歌词数据
