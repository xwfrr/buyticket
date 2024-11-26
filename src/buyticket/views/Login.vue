<template>
    <div>
        <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="username"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="passward"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit">
      登录
    </van-button>
  </div>
</van-form>
        <!-- <button @click="handleLogin">登录</button> -->
    </div>
</template>


<script setup>
import {useRouter} from 'vue-router'
import { ref } from 'vue';
import { Form as vanForm, Field as vanField, CellGroup as vanCellGroup,Button as vanButton} from 'vant';
const username = ref('');
const password = ref('');
const onSubmit = (values) => {
    let username=values.username
    let passward=values.passward
    localStorage.setItem('username','passward')
    router.push("/")
    // console.log(values.username,values.password,values)
}
const router = useRouter()
const handleLogin = ()=>{
    localStorage.setItem("token","kerwin")
    router.push("/")
}
</script>