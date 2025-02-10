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
            <el-form :model="userForm" style="max-width: 600px" :rules="rules" ref="loginFormRef" class="demo-ruleForm">
                <el-form-item prop="userName">
                    <el-input v-model="userForm.userName" placeholder="手机号" :prefix-icon="UserFilled"></el-input>
                </el-form-item>

                <el-form-item prop="passWord">
                    <el-input v-model="userForm.passWord" placeholder="密码" :prefix-icon="Lock"></el-input>
                </el-form-item>

                <el-form-item prop="validCode" v-if="flag">
                    <el-input v-model="userForm.validCode" placeholder="验证码" :prefix-icon="Lock">
                        <template #append>
                            <span :plain="true" @click="startValidCode">{{ message.msg }}</span>
                        </template>
                    </el-input>
                </el-form-item>

                <el-form-item>
                    <el-button type="primary" :style="{ width: '100%' }" @click="submitForm(loginFormRef)">
                        {{ flag ? '注册账号' : '登录' }}</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </el-row>
</template>

<script setup lang="ts" name="Index">
import { reactive, ref } from "vue";
import { UserFilled, Lock } from '@element-plus/icons-vue';
import { getCode, userAuthentication, login } from '../../api/index';
import { ElMessage } from "element-plus";
import { useRouter } from 'vue-router';

const router = useRouter();

// 表单数据对象
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
        console.log('test');
        return ElMessage({
            message: '请填入正确的手机号码',
            type: 'warning',
        });

    }
    timer = true;
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
    getCode({ tel: userForm.userName }).then(({ data }) => {
        console.log(data, 'data');
    })
};

// 校验规则
let vaildUser = (rule, value, callback) => {
    let userExg = /^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/;
    if (value === '') {
        callback('请输入用户名!')
    } else {
        userExg.test(userForm.userName) ? callback() : callback('请输入正确的手机号!')
    }
}

let vaildPassword = (rule, value, callback) => {
    let passWordExg = /^[a-zA-Z0-9_-]{4,16}$/
    if (value === '') {
        callback('请输入用户名!')
    } else {
        passWordExg.test(userForm.passWord) ? callback() : callback('密码错误!')
    }
}

// 表单的校验
let rules = reactive({
    userName: [{ validator: vaildUser, trggle: blur }],
    passWord: [{ validator: vaildPassword, trggle: blur }]
})

let loginFormRef = ref();

// 进行表单数据格式的校验
let submitForm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            if (flag.value) {
                // 注册
                userAuthentication(userForm).then(({ data }) => {
                    if (data.code === 10000) {
                        ElMessage.success('注册成功');
                        flag.value = 0;
                    }
                })
            } else {
                // 登录
                login(userForm).then(({ data }) => {
                    if (data.code === 10000) {
                        ElMessage.success('登录成功');
                        console.log(data);
                        localStorage.setItem('pz_token', data.data.token);
                        localStorage.setItem('userInfo', JSON.stringify(data.data.userInfo));
                        router.push({
                            path: '/'
                        })
                    }
                })
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}
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