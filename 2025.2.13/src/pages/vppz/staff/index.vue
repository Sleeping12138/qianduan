<template>
    <panel-header :route="route.meta"></panel-header>

    <!-- 顶部按钮 -->
    <div class="btns">
        <el-button :icon="Plus" type="primary" @click="open()"> 新增 </el-button>
        <el-popconfirm confirm-button-text="是" cancel-button-text="否" :icon="InfoFilled" icon-color="#626AEF"
            title="是否确认删除？" @confirm="confirmEvent">
            <template #reference>
                <el-button type="danger" :icon="Delete" size="default">Delete</el-button>
            </template>
        </el-popconfirm>
    </div>


    <!-- 表格 -->
    <el-table :data="tableData.list" style="width: 100%" @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="id" />
        <el-table-column prop="name" label="昵称" />
        <el-table-column label="头像">
            <template #default="scope">
                <el-image style="width: 50px; height: 50px" :src="scope.row.avatar" />
            </template>
        </el-table-column>
        <el-table-column prop="sex" label="性别">
            <template #default="scope">
                {{ scope.row.sex === '1' ? '男' : '女' }}
            </template>
        </el-table-column>
        <el-table-column prop="mobile" label="手机号" />
        <el-table-column label="状态">
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


    <!-- 点击添加按钮之后的对话框 -->
    <el-dialog v-model="dialogVisible" title="陪护师" width="500" :before-close="handleClose">
        <el-form :model="form" :rules="rules" label-width="auto" style="max-width: 600px" ref="formRef">
            <el-form-item label="昵称" prop="name">
                <el-input v-model="form.name" placeholder="请输入昵称" />
            </el-form-item>
            <el-form-item label="头像" prop="avatar">
                <el-button v-if="!form.avatar" type="primary" @click="dialogVisibleImage = true">上传头像</el-button>
                <el-image v-else style="width: 100px; height: 100px" :src="form.avatar" />
            </el-form-item>
            <el-form-item label="性别" prop="sex">
                <el-select v-model="form.sex" placeholder="请选择性别" style="width: 240px">
                    <el-option label="男" value="1" />
                    <el-option label="女" value="2" />
                </el-select>
            </el-form-item>
            <el-form-item label="年龄" prop="age">
                <el-input-number v-model="form.age" :min="18" :max="60" />
            </el-form-item>
            <el-form-item label="手机号" prop="mobile">
                <el-input v-model="form.mobile" placeholder="请输入手机号" />
            </el-form-item>
            <el-form-item label="是否生效" prop="active">
                <el-radio-group v-model="form.active">
                    <el-radio :value="0">失效</el-radio>
                    <el-radio :value="1">生效</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <template #footer>
            <div class="dialog-footer">
                <el-button type="primary" @click="confirm(formRef)">确认</el-button>
            </div>
        </template>
    </el-dialog>


    <!-- 头像选择对话框 -->
    <el-dialog v-model="dialogVisibleImage" title="头像选择" width="680">
        <div class="image-list">
            <div v-for="(item, index) of imageInfo" :key="item.name" class="img-box" @click="selectNum = index">
                <div v-if="selectNum === index" class="select">
                    <el-icon class="#fff">
                        <Check />
                    </el-icon>
                </div>
                <el-image style="width: 148px; height: 148px" :src="item.url" />
            </div>
        </div>
        <template #footer>
            <div class="dialog-footer">
                <el-button @click="dialogVisibleImage = false">取消</el-button>
                <el-button type="primary" @click="confirmImage">确认</el-button>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts" name="staff">
import { Plus, InfoFilled, Delete } from '@element-plus/icons-vue';
import { reactive, ref, onMounted, nextTick } from 'vue';
import { photoList, companion, companionList, deleteCompanion } from '../../../api';
// import { ElMessage } from 'element-plus';
import dayjs from 'dayjs';
import { useRoute } from 'vue-router';

const route = useRoute();

// 添加陪护师按钮对话框
let formRef = ref();

let dialogVisible = ref(false);

let form = reactive({
    id: '',
    mobile: '',
    active: 1,
    age: 18,
    avatar: '',
    name: '',
    sex: ''
})

let handleClose = () => {
    dialogVisible.value = false
    formRef.value.resetFields();
}

let rules = reactive({
    name: [{ required: true, triggle: 'blur', message: '请输入用户名' }],
    avatar: [{ required: true, message: '请选择头像' }],
    sex: [{ required: true, message: '请选择性别' }],
    mobile: [{ required: true, triggle: 'blur', message: '请输入手机号' }],
})

let confirm = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            companion(form).then((result) => {
                console.log(result, 'result');
                ElMessage.success('创建成功')
                handleClose();
                getList();
            }).catch((err) => {
                ElMessage.error('创建失败')
            });
        } else {
            console.log('error submit!', fields)
        }
    })
}

let open = (rowData) => {
    dialogVisible.value = true
    nextTick(() => {
        if (rowData) {
            Object.assign(form, rowData);
        }
    })
}


// 头像选择
let dialogVisibleImage = ref(false);

let imageInfo = ref([])

let selectNum = ref(0);

let confirmImage = () => {
    form.avatar = imageInfo.value[selectNum.value].url;
    dialogVisibleImage.value = false
}

// 表格数据

let selectOption = ref([])

let tableData = reactive({
    list: [],
    total: 0
})

let countList = reactive({
    pageNum: 1,
    pageSize: 10
})

let handleSizeChange = (value) => {
    countList.pageNum = value;
}

let handleCurrentChange = (value) => {
    countList.pageSize = value;
}

let handleSelectionChange = (value) => {
    selectOption.value = value.map(item => { id: item.id });
    console.log(selectOption.value);
}

let confirmEvent = () => {
    if (!selectOption.value.length) {
        ElMessage.warning('至少选择一项')
    }
    deleteCompanion({ id: selectOption.value }).then((result) => {
        getList();
    }).catch((err) => {
        console.log(err.data);
    });
}

let getList = () => {
    companionList(countList).then((result) => {
        const { list, total } = result.data.data;
        list.forEach(item => {
            item.create_time = dayjs(item.create_time).format('YYYY-MM-DD');
        });
        tableData.list = list;
        tableData.total = total;
    }).catch((err) => {
        console.log(err.data);
    });
}


onMounted(() => {
    photoList().then((result) => {
        imageInfo.value = result.data.data
    }).catch((err) => {
        console.log();
    });
    getList();
})

</script>

<style lang="less" scoped>
.btns {
    padding: 10px 0 10px 10px;
    background-color: #fff;
}

.image-list {
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    .img-box {
        position: relative;

        .select {
            position: absolute;
            left: 0px;
            top: 0px;
            width: 24px;
            height: 24px;
            background-color: #67c23a;
            z-index: 999;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .el-image {
        margin-right: 10px;
        margin-bottom: 10px;
    }
}
</style>