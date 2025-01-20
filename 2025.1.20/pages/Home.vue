<template>
    <div>
        <h2>Home组件内容</h2>
        <!-- 路由的嵌套就是嵌套router-link和router-view -->
        <div>
            <ul class="nav nav-tabs">
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
                </li>
                <li>
                    <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
                </li>
            </ul>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Home'
    }
</script>

<style>

</style>