<template>
  <VanTabs v-model="activeName">
    <VanTab title="推荐" name="a">
      <div class="videoList">
        <div
          class="listSon"
          v-for="(item, index) in tapList"
          :key="index"
        >
          <div class="imgSon">
            
            <VanImage width="175" fit="cover" height="100" :src="item.imgSrc"></VanImage>
            <div class="font-num">
              <div>
                <VanIcon name="play-circle-o" color="#fff" />
                <span>{{ item.playCount }}</span>
              </div>
              <div>
                <VanIcon name="orders-o" color="#fff" />
                <span>{{ item.commentCount }}</span>
              </div>
            </div>
          </div>
          <div class="font">{{ item.desc }}</div>
        </div>
      </div>
    </VanTab>
    <VanTab title="评论" name="b">内容 2</VanTab>
  </VanTabs>
</template>

<script setup lang="ts">
import { ref, reactive, getCurrentInstance } from "vue";

let { appContext } = getCurrentInstance() as any;

// 兄弟组件传值mitt
let $mitt = appContext.config.globalProperties.$mitt;

let activeName = ref<string>();

let tapList = ref<any>();



$mitt.on("videotap", (data:any) => {
  tapList.value = JSON.parse(data);
});
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