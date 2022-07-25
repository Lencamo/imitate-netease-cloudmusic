<template>
  <div class="comment-container">
    <!-- Title区域 -->
    <van-nav-bar
      title="评论"
      left-arrow
      @click-left="$router.push('/layout/home')"
      fixed
    />

    <!-- Comment区域 -->
    <div class="main">
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <div
            class="comment_wrap"
            v-for="(obj, index) in commentList"
            :key="index"
          >
            <!-- 左侧头像部分 -->
            <div class="img_wrap">
              <img :src="obj.user.avatarUrl" alt="" />
            </div>
            <!-- 右侧内容部分 -->
            <div class="content_wrap">
              <!-- 评论头 -->
              <div class="header_wrap">
                <div class="info_wrap">
                  <p>{{ obj.user.nickname }}</p>
                  <p>{{ obj.time }}</p>
                </div>
                <div>{{ obj.likedCount }}点赞</div>
              </div>
              <!-- 评论内容 -->
              <div class="footer_wrap">{{ obj.content }}</div>
            </div>
          </div>
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>
<script>
import { getCommentListAPI } from '@/api'

export default {
  name: 'comComment',
  data() {
    return {
      commentList: [],
      isLoading: false, // 下拉刷新状态
      loading: false, // 上拉加载状态
      finished: false, // 上拉加载状态

      page: 1
    }
  },
  // created() {
  //   this.getCommentListFn()
  // },
  methods: {
    async getCommentListFn() {
      const { data: res } = await getCommentListAPI({
        id: this.$route.query.id,
        limit: 15,
        offset: (this.page - 1) * 15
      })
      // console.log(res)
      res.commentList = res.comments.forEach((obj) =>
        this.commentList.push(obj)
      )
    },
    // 下拉刷新触发的函数
    onRefresh() {
      setTimeout(() => {
        // 重新加载数据
        this.commentList = []
        this.page = 1 // 会到初始状态
        this.getCommentListFn()

        // 获取数据成功后的操作
        this.isLoading = false
      }, 1000)
    },
    // 上拉加载触发的函数（滚动条与底部距离小于 offset 时触发🚩：所以可以不用在create()函数中加载）
    onLoad() {
      setTimeout(() => {
        // 重新加载数据（这里就不清空🍗原先是数据了，改为追加数据）
        this.getCommentListFn()
        this.page++ // 为下一次请求指定请求数据的内容

        // 获取数据成功后的操作
        this.loading = false
      }, 1500)
    }
  }
}
</script>
<style lang="less" scoped>
.main {
  padding-top: 46px;
}

.comment_wrap {
  margin: 0px 15px;
  display: flex;
  border-bottom: 0.2px solid lightgray;
  padding-bottom: 10px;
}

// .comment_wrap:fis

.img_wrap {
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 0.266667rem;
  margin-top: 0.3733rem;
}

.img_wrap img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.content_wrap {
  flex: 1;
}

.header_wrap {
  display: flex;
}

.info_wrap {
  flex: 1;
}

.info_wrap p:first-child {
  font-size: 0.373333rem;
  color: #666;
}
.info_wrap p:last-of-type {
  font-size: 0.24rem;
  color: #999;
}

.header_wrap div:last-of-type {
  font-size: 0.293333rem;
  color: #999;
  margin-top: 0.3733rem;
}

.footer_wrap {
  font-size: 0.4rem;
  color: #333;
}
</style>
