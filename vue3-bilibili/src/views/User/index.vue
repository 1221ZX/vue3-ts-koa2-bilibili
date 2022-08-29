<template>
  <!-- 头部标签 -->
  <HerderApp />
  <div>
    <van-image width="100%" height="90px" fit="cover" :src="userInfo?.bcimg" />
    <div class="user">
      <div class="user-img">
        <van-image width="84px" fit="cover" round :src="userInfo?.userimg" />
      </div>
      <div class="user-info">
        <div class="fans-pian">
          <div>
            <span v-if="userInfo?.fans" style="color: #000">{{ userInfo?.fans }}</span>
            <span v-else style="color: #000">- -</span>
            <span>粉丝</span>
          </div>
          <div>
            <span v-if="userInfo?.gainpraise" style="color: #000">{{ userInfo?.gainpraise }}</span>
            <span v-else style="color: #000">- -</span>
            <span>关注</span>
          </div>
        </div>
        <div class="btn">
          <button>+ 关注 </button>
        </div>
      </div>
      <div class="user-message">
        <div class="user-message-son">
          <span>{{ userInfo?.name }}</span>
          <button @click="outLogin">退出登录</button>
        </div>
        <div>
          <span>{{ userInfo?.userinfo }}</span>
          <span style="color:#1389bf;font-size: 14px;" @click="unfold">展开</span>
        </div>
      </div>
    </div>
    <!-- tab标签 -->
    <UserInfoTab />
  </div>
</template>

<script setup lang="ts">
import HerderApp from '../../components/headerApp.vue'
import UserInfoTab from '../User/components/userInfoTab.vue'
import { inject, ref } from 'vue'
import { useRouter } from "vue-router";

// let api: any = inject('$API')
let router = useRouter()


interface User {
  attention: number   //关注
  fans: number        //粉丝
  gainpraise: number  // 获赞
  userimg: string     //用户头像
  username: string    //用户名
  userclass: number   //用户等级
  userinfo: string    //用户签名
  bcimg: string       //用户首页背景图片
  code: number        //用户权限等级
  name: string
}
let userInfo = ref<User>()
// async function fn() {
//   let res = await api.getuser('6306d16354d2da31b1010340');
//   userInfo.value = res.data
// }
// fn()
userInfo.value = JSON.parse(localStorage.getItem('user')!);

function outLogin() {
  if (confirm('确定退出账户吗')) {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    router.push({
      path: '/'
    })
  }else{
    return false
  }

}

function unfold() {
  alert('123')
}

</script>

<style lang="scss" scoped>
.user {
  width: 99%;
  height: 170px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  .user-img {
    width: 84px;
    height: 84px;
    margin-top: -12px;
    margin-left: 10px;

  }

  .user-info {
    height: 82px;
    width: 220px;
    padding: 0px 10px;

    .fans-pian {
      width: 220px;
      height: 52px;
      display: flex;
      color: #999;
      font-size: 12px;
    }

    .fans-pian :nth-child(1) {
      width: 150px;
      height: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      span {
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 10px;
      }
    }

    .fans-pian :nth-child(2) {
      width: 150px;
      height: 32px;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;

      span {
        display: inline-block;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        height: 10px;
      }
    }

    .btn {
      height: 32px;
      width: 100%;

      button {
        height: 32px;
        width: 100%;
        border: none;
        background-color: #fb7299;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
      }
    }
  }

  .user-message {
    height: 75px;
    width: 374px;

    .user-message-son {
      display: flex;
      justify-content: space-between;

      button {
        display: flex;
        border: none;
        justify-content: center;
        align-items: center;
        width: 70px;
        height: 30px;
        background-color: #fb7299;
        border-radius: 5px;
        color: #fff;
        font-size: 12px;
      }
    }
  }

  .user-message :nth-child(1) {
    padding: 5px 5px;

    span {
      font-size: 4.8vmin;
    }
  }

  .user-message :nth-child(2) {
    padding: 5px 5px;
    display: flex;
    justify-content: space-between;

    span {
      font-size: 12px;
      color: #999;
    }
  }
}
</style>