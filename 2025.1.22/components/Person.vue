<template>
    <div>
        <h1>人员名单</h1>
        <h2 style="color:red">求和总数：{{ number }}</h2>
        <h2>第一个人员是：{{ firstPeople }}</h2>
        <input type="text" placeholder="请输入姓名" v-model="name">
        <button @click="btn">添加人员</button>
        <button @click="btn2">添加姓王的人员</button>
        <button @click="btn3">添加随机人员</button>
        <ul>
            <li v-for="p of person" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
    import { nanoid } from 'nanoid';
    import { mapState } from 'vuex';
    export default {
        name:'Person',
        data() {
            return {
                name:''
            }
        },
        computed:{
            person(){
                return this.$store.state.personAbout.person;
            },
            number(){
                return this.$store.state.countAbout.n;
            },
            firstPeople(){
                return this.$store.getters['personAbout/firstPeople'];
            }
        },
        methods:{
            btn(){
                const p = {id:nanoid(),name:this.name};
                this.$store.commit('personAbout/ADD_PERSON',p);
                this.name = ''
            },
            btn2(){
                const p = {id:nanoid(),name:this.name};
                this.$store.dispatch('personAbout/addPersonFirstName',p);
                this.name = ''
            },
            btn3(){{
                this.$store.dispatch('personAbout/getPeopleServer');
            }}
        }
    }
</script>

<style>

</style>