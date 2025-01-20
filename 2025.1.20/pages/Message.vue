<template>
    <div>
        <ul>
            <li v-for="m of message" :key="m.id">
                <router-link :to="{
                    name:'test',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">{{ m.title }}</router-link>
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{ m.title }}</router-link> -->
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
import Detail from './Detail.vue';

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
    }
</script>

<style>

</style>