<template>
    <div>
        <ul>
            <li v-for="m of message" :key="m.id">
                <!-- 使用replace发送route会发生替换 -->
                <router-link :to="{
                    name:'message',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">{{ m.title }}</router-link>
                <button @click="push(m)">push查看</button>
                <button @click="replace(m)">replace查看</button>
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>


    export default {
        name:'Message',
        data() {
            return {
                message:[
                    {id:'001',title:'message1'},
                    {id:'002',title:'message2'},
                    {id:'003',title:'message3'},
                ]
            }
        },
        methods: {
            push(m){
                this.$router.push({
                    name:'message',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            },
            replace(m){
                this.$router.replace({
                    name:'message',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                })
            }
        },
    }
</script>

<style>

</style>