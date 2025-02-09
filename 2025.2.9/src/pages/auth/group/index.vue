<template>
    <el-button type="primary" @click="open()"> 打开对话框 </el-button>


    <el-table :data="tableData.list">
        <el-table-column prop="id" label="Id" />
        <el-table-column prop="name" label="昵称" />
        <el-table-column prop="permissionName" label="菜单权限" />
        <el-table-column label="操作">
            <template #default="scope">
                <el-button type="primary" @click="open(scope.row)">修改</el-button>
            </template>
        </el-table-column>
    </el-table>


    <el-dialog v-model="dialogVisible" title="添加权限" width="500" :before-close="handleClose">
        <el-form :model="dialogInfo" ref="dialogInfoRef" :rules="rules" label-position="left" label-width="100px">
            <el-form-item v-show="false" prop="id">
                <el-input v-model="dialogInfo.id" />
            </el-form-item>
            <el-form-item label="名称" prop="name">
                <el-input v-model="dialogInfo.name" placeholder="请填写权限名称" />
            </el-form-item>
            <el-form-item label="权限" prop="permissions">
                <el-tree :data="data" show-checkbox node-key="id" :default-checked-keys="defaultKeys" ref="treeRef"
                    :default-expanded-keys="[2]">
                </el-tree>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="confirm(dialogInfoRef)">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>


<script setup lang="ts" name="group">
import { nextTick, onMounted, reactive, ref } from 'vue';
import { userGetmenu, userSetmenu, menuList } from '../../../api/index';


let dialogVisible = ref(false);
let data = ref([])
let dialogInfoRef = ref();
let treeRef = ref();
let defaultKeys = ref([4, 5])

let tableData = reactive({
    list: [],
    total: 0
})

let dialogInfo = reactive({
    id: '',
    name: '',
    permissions: ''
})

let countList = reactive({
    pageNum: 1,
    pageSize: 10
})


let handleClose = () => {
    dialogVisible.value = false;
    dialogInfoRef.value.resetFields();
    treeRef.value.setCheckedKeys(defaultKeys)
}


let open = (rowData = {}) => {
    dialogVisible.value = true;
    nextTick(() => {
        if (rowData) {
            Object.assign(dialogInfo, { id: rowData.id, name: rowData.name });
            treeRef.value.setCheckedKeys(rowData.permission)
        }
    })
}

let getMenuList = () => {
    menuList(countList).then((result) => {
        const { list, total } = result.data.data;
        tableData.list = list;
        tableData.total = total;
    }).catch((err) => {
        console.log(err.data);
    });
}

let rules = reactive({
    name: [{ required: true, triggle: 'blur', message: '请输入权限名称' }]
})

let confirm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            const permissionArr = JSON.stringify(treeRef.value.getCheckedKeys());
            userSetmenu({ name: dialogInfo.name, permissions: permissionArr, id: dialogInfo.id }).then((result) => {
                console.log(result.data);
            }).catch((err) => {
                console.log(err.data);
            });
        } else {
            console.log('error submit!', fields)
        }
    })
}

onMounted(() => {
    userGetmenu().then((result) => {
        data.value = result.data.data;
    }).catch((err) => {
        console.log(err.data);
    });
    getMenuList()
})

</script>

<style></style>