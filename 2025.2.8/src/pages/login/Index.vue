<template>
    <el-row class="login-container" :justify="'center'" :align="'middle'">
        <el-card style="max-width: 480px">
            <template #header>
                <div class="card-header">
                    <img src="../../../public/login-head.png" />
                </div>
            </template>
            <div class="jump-link" @click="changeLink">
                <el-link type="primary">
                    {{ flag === 0 ? "注册账号" : "返回登陆" }}
                </el-link>
            </div>
            <el-form :model="userForm" style="max-width: 600px" class="demo-ruleForm">
                <el-form-item prop="userName">
                    <el-input v-model="userForm.userName" placeholder="手机号" prefix-icon="UserFilled"></el-input>
                </el-form-item>

                <el-form-item prop="passWord">
                    <el-input v-model="userForm.passWord" placeholder="密码" prefix-icon="Lock"></el-input>
                </el-form-item>

                <el-form-item prop="validCode" v-if="flag">
                    <el-input v-model="userForm.validCode" placeholder="验证码" prefix-icon="Lock">
                        <template #append>
                            <span @click="startValidCode">{{ message.msg }}</span>
                        </template>
                    </el-input>
                </el-form-item>
            </el-form>
        </el-card>
    </el-row>
</template>

<script setup lang="ts" name="Index">
import { reactive, ref } from "vue";

let flag = ref(0);
let userForm = reactive({
    userName: "",
    passWord: "",
    validCode: "",
});
let message = reactive({
    msg: "获取验证码",
    time: 60,
});
let changeLink = () => {
    flag.value = flag.value === 1 ? 0 : 1;
};

let timer = false;
let t;

let startValidCode = () => {
    if (timer) {
        return;
    }
    let phoneNum =
        /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    if (!phoneNum || !phoneNum.test(userForm.userName)) {
        alert("手机号错误");
        return;
    }
    t = setInterval(() => {
        if (message.time <= 0) {
            message.msg = "获取验证码";
            message.time = 60;
            timer = false;
            clearInterval(t);
        } else {
            message.msg = `倒计时${message.time}`;
            message.time--;
        }
    }, 1000);
    timer = true;
};
</script>

<style lang="less" scoped>
:deep(.el-card__header) {
    padding: 0;
}

.login-container {
    height: 100%;

    .card-header {
        background-color: #899fe1;

        img {
            width: 430px;
        }
    }

    .jump-link {
        text-align: right;
        margin-bottom: 10px;
    }
}
</style>