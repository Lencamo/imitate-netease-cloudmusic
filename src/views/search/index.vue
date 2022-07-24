<template>
  <div class="search-container">
    <!-- 搜索框区域 -->
    <van-search shape="round" v-model="value" placeholder="请输入搜索关键词" />

    <!-- 热门搜索区域 -->
    <div class="search_wrap">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <!-- 搜索关键词 -->
        <span class="hot_item">青花瓷</span>
        <span class="hot_item">海底</span>
        <span class="hot_item">告别气球</span>
        <span class="hot_item">大城小爱</span>
        <span class="hot_item">烟雨成云</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comSearch',
  data() {
    return {
      value: '' // 搜索框输入内容
    }
  }
}
</script>
<style lang="less" scoped>
// 样式穿透
/deep/ .van-field__control {
  font-size: 14px;
}

// 热门搜索区域
.search_wrap {
  padding: 0.266667rem;
}
// 热门搜索区域 - 标题
.hot_title {
  font-size: 0.32rem;
  color: #666;
}

// 热门搜索区域 - 搜索关键词
.hot_name_wrap {
  margin: 0.266667rem 0;
}
.hot_item {
  display: inline-block;
  height: 0.853333rem;
  margin-right: 0.213333rem;
  margin-bottom: 0.213333rem;
  padding: 0 0.373333rem;
  font-size: 0.373333rem;
  line-height: 0.853333rem;
  color: #333;
  border-color: #d3d4da;
  border-radius: 0.853333rem;
  border: 1px solid #d3d4da;
}
</style>
