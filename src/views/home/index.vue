<template>
  <div class="home-container">
    <!-- 推荐歌单区域 -->
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8" v-for="obj in recomList" :key="obj.id">
        <van-image width="100%" height="3.2rem" fit="cover" :src="obj.picUrl" />
        <p class="songList_msg">{{ obj.name }}</p>
      </van-col>
    </van-row>

    <!-- 最新音乐区域 -->
    <p class="title">最新音乐</p>
    <song-item
      v-for="obj in newestMusic"
      :key="obj.id"
      :name="obj.name"
      :author="obj.song.artists[0].name"
      :id="obj.id"
    ></song-item>
  </div>
</template>
<script>
import { recommendMusicAPI, newestMusicAPI } from '@/api/index'
import songItem from '@/components/songItem'

export default {
  name: 'comHome',
  components: {
    songItem
  },
  data() {
    return {
      recomList: [],
      newestMusic: []
    }
  },
  created() {
    this.recommendMusicFn()
    this.newestMusicFn()
  },
  methods: {
    // 推荐歌单请求
    async recommendMusicFn() {
      const { data: res } = await recommendMusicAPI({ limit: 6 })
      // console.log(res)
      // console.log(res.result)

      this.recomList = res.result
    },
    // 最新音乐请求
    async newestMusicFn() {
      const { data: res } = await newestMusicAPI({ limit: 10 })
      // console.log(res.result)

      this.newestMusic = res.result
    }
  }
}
</script>
<style lang="less" scoped>
/* 标题 */
.title {
  padding: 0.266667rem 0.24rem;
  margin: 0 0 0.24rem 0;
  background-color: #eee;
  color: #333;
  font-size: 15px;
}
/* 推荐歌单 - 简介信息 */
.songList_msg {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
  margin-top: 0;
}
</style>
