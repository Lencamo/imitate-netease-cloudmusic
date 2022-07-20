<template>
  <div class="home-container">
    <!-- 推荐歌单区域 -->
    <p class="title">推荐歌单</p>
    <van-row gutter="10">
      <van-col span="8">
        <van-image
          width="100%"
          height="3rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="song_name">2022全网最火又好听的热门歌曲推荐</p>
      </van-col>
      <van-col span="8">
        <van-image
          width="100%"
          height="3rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="song_name">超级好听的女声集吖 翻唱比原唱好听系列</p></van-col
      >
      <van-col span="8">
        <van-image
          width="100%"
          height="3rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
        <p class="song_name">精致Rap说唱 | 以后找个人陪你来唱</p></van-col
      >
      <van-col style="background-color: green" span="8">歌单</van-col>
      <van-col style="background-color: red" span="8">歌单</van-col>
      <van-col style="background-color: green" span="8">歌单</van-col>
    </van-row>

    <!-- 最新英语区域 -->
    <p class="title">最新音乐</p>
  </div>
</template>
<script>
export default {
  name: 'comHome'
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
/* 推荐歌单 - 歌名 */
.song_name {
  font-size: 0.346667rem;
  padding: 0 0.08rem;
  margin-bottom: 0.266667rem;
  word-break: break-all;
  text-overflow: ellipsis;
  display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
  -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
  -webkit-line-clamp: 2; /** 显示的行数 **/
  overflow: hidden; /** 隐藏超出的内容 **/
}
</style>
