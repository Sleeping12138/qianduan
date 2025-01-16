<template>
    <div>
        <section class="jumbotron">
            <h3 class="jumbotron-heading">Search Github Users</h3>
            <div>
                <input type="text" placeholder="enter the name you search" v-model="userMsg"/>&nbsp;
                <button @click="btn">Search</button>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name:'Search',
        data() {
            return {
                userMsg:'',
            }
        },
        methods: {
            btn(){
                this.$bus.$emit('getMessage',{isFirst:false,isLoading:true,errMsg:'',users:[]});
                axios.get(`https://api.github.com/search/users?q=${this.userMsg}`).then((result) => {
                    this.$bus.$emit('getMessage',{isFirst:false,isLoading:false,errMsg:'',users:result.data.items});
                }).catch((err) => {
                    this.$bus.$emit('getMessage',{isFirst:false,isLoading:false,errMsg:err.data,users:[]});
                });
            }
        },
    }
</script>

<style>

</style>