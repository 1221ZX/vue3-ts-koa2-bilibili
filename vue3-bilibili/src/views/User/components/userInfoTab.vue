<template>
  <div class="tab">
    <van-tabs v-model="activeName">
      <van-tab title="动态">
        <div class="status">
          <van-image src="https://s1.hdslb.com/bfs/seed/bplus-common/dynamic-assets/empty.png">
          </van-image>
          <p>好像没有东西诶</p>
        </div>
      </van-tab>
      <van-tab title="视频" class="video">
        <div class="message">
          <van-image width="280" height="160"
            src="https://s1.hdslb.com/bfs/static/jinkela/mstation-h5/assets/noContent.png"></van-image>
          <div class="text">
            <p>Ta还没有投过稿~</p>
            <p>快去发现 新内容 吧</p>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let activeName = ref<string>();
activeName.value = 'b'

</script>

<style lang="scss" scoped>
.tab {
  height: 100%;
  border-top: 1px solid #e7e7e7;

  .video {
    .message {
      height: 240px;
      width: 280px;
      margin: 20px auto;

      .text {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        p {
          display: inline-block;
          text-align: center;
          height: 0px;
          width: 220px;
          color: #999;
        }
      }
    }
  }

  .status {
    width: 370px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 30px;
    p{
      width: 150px;
      margin-left: 35px;
      color: #999;
    }
  }
}
</style>