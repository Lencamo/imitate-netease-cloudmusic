<template>
  <div class="app-container">
    <!-- vant组件库测试 -->
    <van-button type="primary">主要按钮</van-button>

    <!-- 路由链接测试 -->
    <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)

export default {}
</script>
<style lang="less" scoped></style>
