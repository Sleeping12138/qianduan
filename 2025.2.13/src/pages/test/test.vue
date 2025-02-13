<template>
    <el-row :justify="'center'" :align="'middle'" class="box">
        <el-col :span="8">
            <div class="grid-content ep-bg-purple type1" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple-light type2" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple type3" />
        </el-col>
        <el-col :span="8">
            <div class="grid-content ep-bg-purple type1" />
        </el-col>
    </el-row>
</template>

<script setup lang="js" name="test">

</script>

<style lang="less" scoped>
.box {
    height: 1000px;
}

.type1 {
    background-color: orange;
    height: 200px;
}

.type2 {
    background-color: greenyellow;
    height: 200px;
}

.type3 {
    background-color: red;
    height: 200px;
}
</style>