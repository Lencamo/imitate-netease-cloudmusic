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
    </div>
  </div>
</template>
<script>
import { getCommentListAPI } from '@/api'

export default {
  name: 'comComment',
  data() {
    return {
      commentList: []
    }
  },
  created() {
    this.getCommentListFn()
  },
  methods: {
    async getCommentListFn() {
      const { data: res } = await getCommentListAPI({
        id: this.$route.query.id
      })
      // console.log(res)
      this.commentList = res.comments
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
