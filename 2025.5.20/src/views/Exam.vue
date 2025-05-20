<template>
    <el-form inline="true">
        <el-form-item label="创建日期">
            <el-date-picker v-model="datetimeRange" style="width: 240px" type="datetimerange" range-separator="至"
                start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="竞赛名称">
            <el-input v-model="params.title" placeholder="请您输入要搜索的竞赛名称" />
        </el-form-item>
        <el-form-item>
            <el-button @click="onSearch" plain>搜索</el-button>
            <el-button @click="onReset" plain type="info">重置</el-button>
            <el-button type="primary" :icon="Plus" plain @click="onAddExam">添加竞赛</el-button>
        </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table height="526px" :data="examList">
        <el-table-column prop="title" label="竞赛标题" />
        <el-table-column prop="startTime" width="180px" label="竞赛开始时间" />
        <el-table-column prop="endTime" width="180px" label="竞赛结束时间" />
        <el-table-column label="是否开赛" width="100px">
            <template #default="{ row }">
                <div v-if="!isNotStartExam(row)">
                    <el-tag type="warning">已开赛</el-tag>
                </div>
                <div v-else>
                    <el-tag type="info">未开赛</el-tag>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="status" width="100px" label="是否发布">
            <template #default="{ row }">
                <div v-if="row.status == 0">
                    <el-tag type="danger">未发布</el-tag>
                </div>
                <div v-if="row.status == 1">
                    <el-tag type="success">已发布</el-tag>
                </div>
            </template>
        </el-table-column>
        <el-table-column prop="createName" width="140px" label="创建用户" />
        <el-table-column prop="createTime" width="180px" label="创建时间" />
        <el-table-column label="操作" width="180px">
            <template #default="{ row }">
                <el-button v-if="isNotStartExam(row) && row.status == 0" type="text" @click="onEdit(row.examId)">编辑
                </el-button>
                <el-button v-if="isNotStartExam(row) && row.status == 0" type="text" @click="onDelete(row.examId)"
                    class="red">删除
                </el-button>
                <el-button v-if="row.status == 1 && isNotStartExam(row)" type="text"
                    @click="cancelPublishExam(row.examId)">撤销发布</el-button>
                <el-button v-if="row.status == 0 && isNotStartExam(row)" type="text"
                    @click="publishExam(row.examId)">发布</el-button>
                <el-button type="text" v-if="!isNotStartExam(row)">已开赛，不允许操作</el-button>
            </template>
        </el-table-column>
    </el-table>
    <!-- 分页区域 -->
    <el-pagination background size="small" layout="total, sizes, prev, pager, next, jumper" :total="total"
        v-model:current-page="params.pageNum" v-model:page-size="params.pageSize" :page-sizes="[5, 10, 15, 20]"
        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
</template>

<script setup>
import { Plus } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue'
import { getExamList } from '@/api/exam.js';
import { useRouter } from 'vue-router';

let router = useRouter();

/**
 * 判断当前是否已经开始竞赛
 * @param exam 
 */
function isNotStartExam(exam) {
    const now = new Date();
    return new Date(exam.startTime) > now
}

const params = reactive({
    pageNum: 1,
    pageSize: 10,
    startTime: '',
    endTime: '',
    title: ''
})

const examList = ref([])
const total = ref(0)
const datetimeRange = ref([])


/**
 * 获取竞赛列表
 */
async function getList() {
    const result = await getExamList(params)
    examList.value = result.data.dataList
    total.value = result.data.total
}
getList()

/**
 * 页面个数 / 页数更换触发函数
 */
function handleSizeChange() {
    params.pageNum = 1
    getList()
}

function handleCurrentChange() {
    getList()
}


/**
 * 搜索按钮触发事件
 */
function onSearch() {
    if (datetimeRange.value[0] instanceof Date) {
        params.startTime = datetimeRange.value[0].toISOString();
    }
    if (datetimeRange.value[1] instanceof Date) {
        params.endTime = datetimeRange.value[1].toISOString();
    }
    params.pageNum = 1
    getList()
}


/**
 * 重置按钮触发事件
 */
function onReset() {
    params.pageNum = 1
    params.pageSize = 10
    params.title = ''
    params.startTime = ''
    params.endTime = ''
    datetimeRange.value.length = 0
    getList()
}

/**
 * 添加竞赛
 */
function onAddExam() {
    router.push('/oj/layout/updataExam?type=add');
}


</script>