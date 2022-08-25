<template>
  <div class="videoList">
    <div
      class="listSon"
      @click="goVideoInfo(item)"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="imgSon">
        <van-image width="175" height="100" fit="cover" :src="item.imgSrc"></van-image>
        <div class="font-num">
          <div>
            <van-icon name="play-circle-o" color="#fff" />
            <span>{{ item.playCount }}</span>
          </div>
          <div>
            <van-icon name="orders-o" color="#fff" />
            <span>{{ item.commentCount }}</span>
          </div>
        </div>
      </div>
      <div class="font">{{ item.desc }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref, getCurrentInstance,ComponentInternalInstance, inject } from "vue";
import { useRouter, useRoute } from "vue-router";

//useRouter导入路由函数
let router = useRouter();

// 视频数据列表接口定义
interface VideoList {
  id: Number | String;
  link: String;
  imgSrc: String;
  desc: String;
  playCount: String;
  commentCount: String;
  videoSrc: String;
}

let list = ref<VideoList[]>([]);

// 引入组件实例

let  {appContext}  = getCurrentInstance() as any;
// let $http = appContext.app.config.globalProperties.$http;
let api:any = inject('$API')
let $mitt = appContext.app.config.globalProperties.$mitt;

// 获取video列表数据
const onVideoList = async () => {
  let result = await api.getvideolist();
  list.value = result.data
};

// 跳转至video播放页
function goVideoInfo(item: Object) {
  setTimeout(() => {
    goVdieoTap();
  }, 100);

  router.push({
    name: "videoinfo",
    params: {
      info: JSON.stringify(item),
    },
  });
}

// 像组件传值
function goVdieoTap() {
  $mitt.emit("videotap", JSON.stringify(list.value));
}

onVideoList();
</script>

<style lang="scss" scoped>
.videoList {
  width: 94%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .listSon {
    width: 170px;
    // height: 140px;
    margin-top: 10px;
    .imgSon {
      height: 110px;
      .font-num {
        display: flex;
        justify-content: space-between;
        position: relative;
        bottom: 24px;
        left: 4px;
        span {
          font-size: 12px;
          color: #fff;
          margin-left: 5px;
        }
      }
      .font-num :nth-child(2) {
        margin-right: 5px;
      }
    }
    .font {
      width: 176px;
      font-size: 12px;
      color: rgb(87, 87, 87);
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
      overflow: hidden; //溢出内容隐藏
      text-overflow: ellipsis; //文本溢出部分用省略号表示
      display: -webkit-box; //特别显示模式
      line-clamp: 2;
      -webkit-box-orient: vertical; //盒子中内容竖直排列
    }
  }
}
</style>