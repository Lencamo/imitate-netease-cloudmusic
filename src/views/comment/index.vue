<template>
  <div class="comment-container">
    <!-- Title区域 -->
    <van-nav-bar title="评论" left-arrow fixed />

    <!-- Comment区域 -->
    <div class="comment_wrap">
      <!-- 左侧头像部分 -->
      <div class="img_wrap">
        <img src="https://img01.yzcdn.cn/vant/cat.jpeg" alt="" />
      </div>
      <!-- 右侧内容部分 -->
      <div class="content_wrap">
        <!-- 评论头 -->
        <div class="header_wrap">
          <div class="info_wrap">
            <p>昵称</p>
            <p>2022-7-25</p>
          </div>
          <div>12点赞</div>
        </div>
        <!-- 评论内容 -->
        <div class="footer_wrap"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'comComment'
}
</script>
<style lang="less" scoped>
.comment_wrap {
  padding-top: 46px;
  margin: 0 15px;
  display: flex;
}

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
