<template>
  <div class="layout-container">
    <!-- 头部区域 -->
    <van-nav-bar :title="activeTitle" fixed />

    <!-- 内容区域 -->
    <div class="main">
      <!-- 二级路由-挂载点 -->
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

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
      active: 0, // 默认选中的标签
      activeTitle: this.$route.meta.title // 使用动态的title值
    }
  },
  watch: {
    // bug解决:
    // 因为使用vant的<van-tabbar>组件的 @change="onChange" 监听事件中参数无法为activeTitle直接赋值
    // 导致activeTitle在search子组件中刷新后始终是同一个固定的静态值'首页'的bug
    // 解决方案:🚩
    // 不从<van-tabbar>组件的name属性中获取title数据，转而从路由中获取动态的title数据
    $route: function () {
      this.activeTitle = this.$route.meta.title
    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
/* 中间内容区域 - 容器样式(留好上下导航所占位置) */
.layout-container {
  .main {
    padding-top: 46px;
    padding-bottom: 50px;
  }
}
</style>
