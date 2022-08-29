<template>
  <div class="header">
    <div class="left">
      <img style="width: 60px; height: 30px; padding: 0 10px" src="../assets/images/bilibili.png" @click="onBilibili" />
    </div>
    <div class="right">
      <div class="search" @click="onSearch">
        <van-icon name="search" size="25px" color="#94999e" />
      </div>
      <div @click="user">
        <van-image v-if="userInfo" style="width: 25px; height: 25px" round :src="userInfo.userimg" />
        <img v-else style="width: 25px; height: 25px" src="../assets/images/login.png" />
      </div>
      <div class="btn">
        <button @click="onDown">下载app</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from "vue-router";

let router = useRouter();

// 获取用户个人信息
let userInfo = ref();

userInfo.value = JSON.parse(localStorage.getItem('user')!)


// 跳转bilibili首页
function onBilibili() {
  router.push({
    path: "/",
  });
}

// search提示
function onSearch() {
  alert("搜索功能尚未开放");
}

function user() {
  if (userInfo.value) {
    router.push({
      path: "/user",
    });
  } else {
    router.push({
      path: "/login",
    });
  }
}

function onDown() {
  location.href = "https://app.bilibili.com/";
}
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .right {
    width: 150px;
    display: flex;
    justify-content: space-around;

    .search {
      width: 25px;
      height: 25px;
    }

    .btn {
      button {
        background-color: rgb(250, 118, 155);
        width: 64px;
        height: 24px;
        border: none;
        color: #fff;
        font-size: 12px;
        border-radius: 5px;
      }
    }
  }
}
</style>
