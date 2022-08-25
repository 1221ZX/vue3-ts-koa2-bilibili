<template>
  <!-- 头部公共标签 -->
  <HeaderApp />
  <!-- 视频播放器  autoplay控制自动播放-->
  <div>
    <video controls width="375" height="235">
      <source :src="video!.videoSrc" type="video/mp4" />
    </video>
  </div>
  <!-- video详细信息 -->
  <div class="video-info">
    <div>
      <span>{{ video!.desc }}</span>
    </div>
    <div class="text-son">
      <div class="left">
        <van-image  round width="25"
          src="https://img1.baidu.com/it/u=1960292808,1761809160&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500">
        </van-image>
        <span>zx棒棒哒</span>
      </div>
      <div class="right">
        <div class="son1">124 万次观看</div>
        <div class="son2">
          <van-icon name="good-job" size="19" color="#757575" />
          <span>123 万</span>
        </div>

        <div class="son3">
          <van-icon name="star" size="19" color="#757575" />
          <span>122 万</span>
        </div>
      </div>
    </div>
  </div>
  <!-- 推荐/评论组件 -->
  <div class="line-border">
    <VideoTap />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";
import HeaderApp from "../../components/headerApp.vue";
import VideoTap from '../Video/components/videoTap.vue'

interface VideoInfo {
  commentCount: string | number;
  desc: string;
  id: string;
  imgSrc: string;
  playCount: string | number;
  videoSrc: string;
}

// 使用路由信息函数
let route = useRoute();

// 定义info数据和index数据格式
let video = ref<VideoInfo>();

function fn() {
  video.value = JSON.parse(route.params.info);
}

// 通过unplugin-vue-define-options插件注册组件name
defineOptions({
  name: "videoinfo"
});

fn();
</script>

<style lang="scss">
.video-info {
  padding: 10px 10px;
  font-size: 16px;
}

.text-son {
  margin-top: 10px;
  width: 100%;
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;
    width: 120px;

    span {
      font-size: 12px;
      margin-left: 5px;
      color: rgb(33, 33, 33);
    }
  }

  .right {
    width: 210px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #999999;

    .son1 {
      font-size: 12px;
      width: 40%;
    }

    .son2 {
      display: flex;
      font-size: 12px;
      align-items: center;
      width: 30%;
      height: 100%;
      margin-left: 10px;
    }

    .son3 {
      width: 30%;
      display: flex;
      align-items: center;
      font-size: 12px;
    }
  }
}

.line-border {
  border-bottom: 1px solid #ececec;
}
</style>