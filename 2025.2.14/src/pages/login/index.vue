<template>
    <!-- 登录界面 -->
    <h1>登录界面</h1>
    <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field v-model="form.username" name="用户名" label="用户名" placeholder="用户名"
                :rules="[{ required: true, message: '请填写用户名' }]" />
            <van-field v-model="form.password" type="password" name="密码" label="密码" placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]" />
        </van-cell-group>
        <div class="btn">
            <van-button round block type="primary" native-type="submit">
                提交
            </van-button>
        </div>
    </van-form>
</template>

<script setup lang="js" name="login">
import { reactive, getCurrentInstance } from 'vue';
const { proxy } = getCurrentInstance();

let form = reactive({
    userName: '',
    passWord: '',
})

// 另一种异步操作的方式
let onSubmit = async () => {
    let ret = await proxy.$api.login(form)
    console.log(ret);
}
</script>

<style lang="less" scoped>
h1 {
    text-align: center;
}

.btn {
    margin: 16px;
}
</style>