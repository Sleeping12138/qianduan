<template>
    <div class="panel-heading">
        <div class="panel-lead">
            <div class="title">菜单管理</div>
            <p class="description">菜单规则通常对应一个控制器的方法，同时菜单栏数据页从规则中获取</p>
        </div>
    </div>
</template>

<script setup name="panelHeader">

</script>

<style lang="less" scoped>
.panel-heading {
    padding: 15px;
    background: #e8edf0;
    border-color: #e8edf0;
    position: relative;

    .panel-lead {
        font-size: 14px;

        .title {
            font-weight: bold;
            font-style: normal;
        }

        .description {
            margin-top: 5px;
        }
    }
}
</style>
