<script setup lang="ts">
import useLogin from '../use/login'
const { username, password, onSubmit } = useLogin()
</script>
<template>
    <van-nav-bar title="登录"></van-nav-bar>
    <van-form @submit="onSubmit">
        <van-cell-group>
            <van-field
                v-model="username"
                name="用户名"
                label="用户名"
                placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                label="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
            />
        </van-cell-group>
        <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"> 提交 </van-button>
        </div>
    </van-form>
</template>
