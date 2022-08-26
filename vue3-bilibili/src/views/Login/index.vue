<template>
  <van-form @submit="onSubmit">
    <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]" />
    <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]" />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">注册并登录</van-button>
    </div>
  </van-form>
</template>

<script setup lang="ts">
import { inject, ref } from 'vue'
import { useRouter } from 'vue-router'
let api: any = inject('$API')

let username = ref<string>()
let password = ref<number>()

let router = useRouter()

let onSubmit = async () => {
  try {
    let result = await api.login(username.value, password.value)
    localStorage.setItem('token', result.token)
    router.push({
      path:'/'
    })
  } catch (error) {
    throw error
  }
}
</script>

<style lang="" scoped>

</style>