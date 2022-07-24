<template>
  <div class="search-container">
    <!-- 搜索框区域 -->
    <van-search
      shape="round"
      v-model="searchValue"
      placeholder="请输入搜索关键词"
    />

    <!-- 热门搜索区域 -->
    <div class="search_wrap" v-if="resultList.length === 0">
      <!-- 标题 -->
      <p class="hot_title">热门搜索</p>
      <div class="hot_name_wrap">
        <!-- 搜索关键词 -->
        <!-- 没有id使用索引✨做为id -->
        <span
          class="hot_item"
          v-for="(obj, index) in hotArr"
          :key="index"
          @click="hotArrBtn(obj.first)"
          >{{ obj.first }}</span
        >
      </div>
    </div>

    <!-- 搜索结果区域 -->
    <div class="search_wrap" v-else>
      <!-- 标题 -->
      <p class="hot_title">最佳匹配</p>
      <song-item
        v-for="obj in resultList"
        :key="obj.id"
        :name="obj.name"
        :author="obj.ar[0].name"
      ></song-item>
    </div>
  </div>
</template>
<script>
import { hotSearchAPI, searchResultListAPI } from '@/api/index'
import songItem from '@/components/songItem'

export default {
  name: 'comSearch',
  components: {
    songItem
  },
  data() {
    return {
      searchValue: '', // 搜索框输入内容
      hotArr: [], // 热搜关键字
      resultList: [], // 搜索结果
      timer: null // 定时器（用于搜索框的防抖）
    }
  },
  created() {
    this.hotSearchFn()
  },
  methods: {
    // 热搜关键字请求
    async hotSearchFn() {
      const { data: res } = await hotSearchAPI()
      // console.log(res.result.hots)

      this.hotArr = res.result.hots
    },
    // 热搜关键字点击事件
    async hotArrBtn(hotValue) {
      this.searchValue = hotValue

      // 升级✨优化：若直接点击热搜关键字，直接请求（不使用防抖）
      const { data: res } = await searchResultListAPI({
        type: 1,
        keywords: this.searchValue
      })
      this.resultList = res.result.songs

      // 注意事项：为了防止同时发生两次请求，在点击发起请求结束👀后：使用定时器重置输入框发起的请求（由于内容不变，相当于停止了请求）
      setTimeout(() => {
        clearTimeout(this.timer)
      })
    },

    // 搜索结果
    searchResultListFn() {
      // 防抖🚩技术（为请求发起过程设定一定的完成时间）
      clearTimeout(this.timer)
      this.timer = setTimeout(async () => {
        // bug✨分析：解决删除搜索框内容后，最后一次请求失败导致 esultList.length不为0，无法切换页面的bug
        // 解决方法：if 搜索框没有内容，直接跳转页面，else 请求数据
        if (this.searchValue.length === 0) return (this.resultList = [])

        const { data: res } = await searchResultListAPI({
          type: 1,
          keywords: this.searchValue
        })
        // console.log(res.result.songs)

        this.resultList = res.result.songs
      }, 500)
    }
  },
  watch: {
    // 监听输入框中的内容
    searchValue: function () {
      // console.log(this.searchValue)
      this.searchResultListFn()
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
