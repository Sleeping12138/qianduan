<template>
    <el-form :inline="true">
        <el-form-item>
            <selector placeholder="请选择题目难度" v-model="param.difficulty" style="width: 200px;"></selector>
        </el-form-item>
        <el-form-item>
            <el-input v-model="param.title" placeholder="请您输入要搜索的题目标题" />
        </el-form-item>
        <el-form-item>
            <el-button plain @click="onSearch">搜索</el-button>
            <el-button plain type="info" @click="onReset">重置</el-button>
            <el-button plain type="primary" :icon="Plus" @click="addQuestion">添加题目</el-button>
        </el-form-item>
    </el-form>
    <el-table height="526px" :data="questionList">
        <el-table-column prop="questionId" width="180px" label="题目id" />
        <el-table-column prop="title" label="题目标题" />
        <el-table-column prop="difficulty" label="题目难度" width="90px">
            <template #default="{ row }">
                <div v-if="row.difficulty === 1" style="color:#3EC8FF;">简单</div>
                <div v-if="row.difficulty === 2" style="color:#FE7909;">中等</div>
                <div v-if="row.difficulty === 3" style="color:#FD4C40;">困难</div>
            </template>
        </el-table-column>
        <el-table-column prop="createName" label="创建人" width="140px" />
        <el-table-column prop="createTime" label="创建时间" width="180px" />
        <el-table-column label="操作" width="100px" fixed="right">
            <template #default="{ row }">
                <el-button type="text" @click="onEdit(row.questionId)">编辑
                </el-button>
                <el-button type="text" class="red" @click="onDelete(row.questionId)">删除
                </el-button>
            </template>
        </el-table-column>
    </el-table>
    <div class="demo-pagination-block">
        <el-pagination v-model:current-page="param.pageNum" v-model:page-size="param.pageSize"
            :page-sizes="[1, 5, 10, 20, 30]" :size="'small'" layout="total, sizes, prev, pager, next, jumper"
            :total="total" @size-change="handleSizeChange" @current-change="handleCurrentChange" />
    </div>
    <QuestionDrawer ref="questionDrawer" @success="onSuccess"></QuestionDrawer>
</template>

<script setup>
import { Plus } from "@element-plus/icons-vue"
import Selector from "@/components/QuestionSelector.vue"
import QuestionDrawer from '@/components/QuestionDrawer.vue';
import { getQuestionList, deleteQuestion } from '@/api/question.js';
import { reactive, ref } from "vue";

let questionList = ref([]);
let total = ref(0);
let param = reactive({
    pageSize: 10,
    pageNum: 1,
    difficulty: '',
    title: ''
})
let questionDrawer = ref();


/**
 * 获取题目列表
 */
async function getList() {
    let result = await getQuestionList(param);
    console.log(result);
    questionList.value = result.data.dataList;
    total = result.data.total
}
getList();

/**
 * 个数发生改变调用
 */
function handleSizeChange() {
    getList()
    param.pageNum = 1
}

/**
 * 页数发生改变调用
 */
function handleCurrentChange() {
    getList()
}

/**
 * 搜索按钮
 */
function onSearch() {
    getList()
    params.pageNum = 1
}

/**
 * 重置按钮
 */
function onReset() {
    param.pageSize = 10;
    param.pageNum = 1;
    param.difficulty = '';
    param.title = '';
    getList()
}

/**
 * 打开添加题目抽屉
 */
function addQuestion() {
    questionDrawer.value.open()
}

/**
 * 执行完更行数据之后的回调
 */
function onSuccess(data) {
    if (data === 'add') {
        param.pageNum = 1;
    }
    getList();
}

/**
 * 点击编辑按钮触发事件
 */
function onEdit(questionId) {
    questionDrawer.value.open(questionId);
}

/**
 * 删除题目
 */
async function onDelete(questionId) {
    await deleteQuestion(questionId);
    param.pageNum = 1;
    getList();
}

</script>