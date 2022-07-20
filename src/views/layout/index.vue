<template>
  <div class="layout-container">
    <!-- 头部区域 -->
    <van-nav-bar :title="activeTitle" />

    <!-- 内容区域 -->
    <router-view></router-view>

    <!-- 底部区域 -->
    <van-tabbar v-model="active" @change="onChange" route>
      <van-tabbar-item icon="home-o" replace to="/layout/home" name="首页"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" replace to="/layout/search" name="搜索"
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
      active: 0, // 默认选中的标签，当然也可以使用name值：active: '首页'
      activeTitle: '首页'
    }
  },
  methods: {
    // 优化：不使用active改变title，改用@change事件间接改变title值
    onChange(activeValue) {
      // console.log(activeValue)
      this.activeTitle = activeValue
    }
  }
}
</script>
<style lang="less" scoped></style>
