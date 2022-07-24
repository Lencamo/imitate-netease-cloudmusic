<template>
  <div class="songItem-container">
    <van-cell-group>
      <van-cell center :title="name" :label="author">
        <template #right-icon>
          <van-icon name="play-circle-o" size="24px" @touchstart="playFn" />
        </template>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
export default {
  name: 'songItem',
  props: {
    name: String, // 歌名
    author: String, // 歌手
    id: Number
  },
  methods: {
    playFn() {
      this.$router.push({
        path: '/play',
        query: {
          id: this.id // 歌曲id, 通过路由跳转传递过去
        }
      })
    }
  }
}
</script>

<style scoped>
/* 最新音乐单元格 - 底部边框调整 */
.van-cell::after {
  border-bottom: 1.2px solid lightgray;
}
</style>
