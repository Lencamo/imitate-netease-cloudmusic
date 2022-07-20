<template>
  <div class="layout-container">
    <!-- 头部区域 -->
    <van-nav-bar title="标题" />

    <!-- 内容区域 -->
    <router-view></router-view>

    <!-- 底部区域 -->
    <van-tabbar v-model="active" route>
      <van-tabbar-item icon="home-o" replace to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>
<script>
export default {
  name: 'comLayout',
  data() {
    return {
      active: 0
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped></style>
