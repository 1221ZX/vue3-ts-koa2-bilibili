<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item  v-for="(item, index) in arrImgList" :key="index">
        <van-image width="375" height="120" :src="item" fit="cover" />
      </van-swipe-item>
  </van-swipe>
</template>

<script setup lang="ts">
import { ref } from "vue";

let arrImgList = ref<Array<string>>([
  "https://img1.baidu.com/it/u=4180237003,1928001176&fm=253&fmt=auto&app=138&f=PNG?w=889&h=500",
  "https://img1.baidu.com/it/u=2223541233,534910275&fm=253&fmt=auto&app=138&f=JPEG?w=864&h=482",
  "https://img2.baidu.com/it/u=2429878510,3954415163&fm=253&fmt=auto&app=138&f=JPEG?w=794&h=500",
  "https://img1.baidu.com/it/u=620226322,1562075952&fm=253&fmt=auto&app=138&f=JPEG?w=961&h=500",
  "https://img1.baidu.com/it/u=3635020715,2483000403&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=251"
]);
</script>

<style scoped lang='scss'>
.my-swipe .van-swipe-item {
  margin-top: 10px;
  text-align: center;
}
</style>