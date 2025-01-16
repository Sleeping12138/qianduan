<template>
    <div class="row">
        <div v-show="users.length" class="card" v-for="user of users" :key="user.login">
            <a :href="user.html_url" target="_blank">
            <img :src="user.avatar_url" style='width: 100px'/>
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <h1 v-show="isFirst">欢迎使用！</h1>
        <h1 v-show="isLoading">加载中......</h1>
        <h1 v-show="errMsg">网络错误...</h1>
    </div>
</template>

<script>
    export default {
        name:'List',
        data() {
            return {
                isFirst : true,
                isLoading : false,
                errMsg : "",
                users:[],
            }
        },
        mounted(){
            this.$bus.$on('getMessage',(userObj)=>{
                this.isFirst = userObj.isFirst;
                this.isLoading = userObj.isLoading;
                this.errMsg = userObj.errMsg;
                this.users = userObj.users;
            })
        }
    }
</script>

<style>

</style>