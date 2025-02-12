<template>
    <!-- 表格 -->
    <el-table :data="tableData.list" style="width: 100%">
        <el-table-column prop="id" label="id" />
        <el-table-column prop="name" label="昵称" />
        <el-table-column label="所属组别">
            <template #default="scope">
                {{ getClass(scope.row.permissions_id) }}
            </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" />
        <el-table-column prop="active" label="状态">
            <template #default="scope">
                <el-tag :type="scope.row.active ? 'success' : 'danger'">{{ scope.row.active ? '正常' : '错误' }}</el-tag>
            </template>
        </el-table-column>
        <el-table-column label="创建时间">
            <template #default="scope">
                <div class="flex-box">
                    <el-icon>
                        <Clock />
                    </el-icon>
                    <span style="margin-left: 10px;">{{ scope.row.create_time }}</span>
                </div>
            </template>
        </el-table-column>
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="primary" @click="open(scope.row)">修改</el-button>
            </template>
        </el-table-column>
    </el-table>

    <!-- 底部计数栏 -->
    <div class="pagination-info">
        <el-pagination v-model:current-page="countList.pageNum" :page-size="countList.pageSize" :size="'default'"
            :background="false" layout="total, prev, pager, next" :total="tableData.total"
            @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>

    <!-- 对话框 -->
    <el-dialog v-model="dialogVisible" title="编辑用户" width="500" :before-close="handleClose">
        <!-- 对话框中的内容 -->
        <el-form :rules="rules" ref="dialogInfoRef" :model="form" label-width="auto" style="max-width: 600px">
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="form.mobile" disabled />
            </el-form-item>
            <el-form-item label="昵称" prop="name">
                <el-input v-model="form.name" />
            </el-form-item>
            <el-form-item label="菜单权限" prop="permissions_id">
                <el-select v-model="form.permissions_id" placeholder="Select" style="width: 240px">
                    <el-option v-for="item in menuList" :key="item.id" :label="item.name" :value="item.id" />
                </el-select>
            </el-form-item>
        </el-form>

        <!-- 底部确认按钮 -->
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="confirm(dialogInfoRef)">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts" name="admin">
import dayjs from 'dayjs';
import { nextTick, onMounted, reactive, ref } from 'vue';
import { authAdmin, menuSelectlist, updateUser } from '../../../api/index';

// 表格数据
// #region
let countList = reactive({
    pageNum: 1,
    pageSize: 10
})

let tableData = reactive({
    list: [],
    total: 0
})

let menuList = ref([]);

let getAuthAdmin = () => {
    authAdmin(countList).then((data) => {
        let { list, total } = data.data.data;
        list.forEach(item => {
            item.create_time = dayjs(item.create_time).format('YYYY-MM-DD');
        });
        tableData.list = list;
        tableData.total = total;
        console.log(tableData.list, 'tableData.list');
    })
}

let getClass = (id) => {
    let temp = menuList.value.find(item => {
        if (item.id === id) {
            return item;
        }
    })
    return temp ? temp.name : '超级管理员';
}

let open = (rowData) => {
    dialogVisible.value = true;
    nextTick(() => {
        if (rowData) {
            Object.assign(form, { mobile: rowData.mobile, name: rowData.name, permissions_id: rowData.permissions_id })
        }
    })
}

let handleSizeChange = (value) => {
    countList.pageNum = value;
}

let handleCurrentChange = (value) => {
    countList.pageSize = value;
}
// #endregion

// 对话框数据
// #region
let dialogVisible = ref(false)

let form = reactive({
    mobile: '',
    name: '',
    permissions_id: ''
})

let dialogInfoRef = ref();

let handleClose = () => {
    dialogVisible.value = false;
}

let rules = reactive({
    name: [{ required: true, triggle: 'blur', message: '请输入用户名' }],
    permissions_id: [{ required: true, message: '请输入菜单权限' }],
})

let confirm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            updateUser({ name: form.name, permissions_id: form.permissions_id }).then((result) => {
                dialogVisible.value = false;
                getAuthAdmin();
            }).catch((err) => {
                console.log(err.data);
            });
        } else {
            console.log('error submit!', fields)
        }
    })
}
// #endregion

onMounted(() => {
    // 获取用户数据
    getAuthAdmin();

    // 获取设置的权限数据
    menuSelectlist().then((result) => {
        menuList.value = result.data.data;
        console.log(menuList);
    }).catch((err) => {
        console.log(err.data);
    });
})
</script>

<style lang="less" scoped>
.flex-box {
    display: flex;
    align-items: center;
}
</style>