<template>
    <div>
        <h1>当前求和为：{{ n }}</h1>
        <h2>求和放大100倍：{{ bigSum }}</h2>
        <h2>{{ name }}---{{ age }}</h2>
        <select v-model.number="num">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <h2 style="color:red">人员总数：{{ person.length }}</h2>
        <button @click="increment(num)">+</button>
        <button @click="decrement(num)">-</button>
        <button @click="incrementOdd(num)">当前和为奇数再加</button>
        <button @click="incrementWait(num)">等一等再加</button>
    </div>
</template>

<script>
    import { mapState,mapGetters,mapActions,mapMutations } from 'vuex';
    export default {
        name:'Count',
        data() {
            return {
                num:1
            }
        },
        computed:{
            // 放在计算属性中

            //传入对象的形式
            // ...mapState({n:'n',name:'name',age:'age'}),

            //传入数组的形式
            ...mapState('countAbout',['n','name','age']),
            ...mapState('personAbout',['person']),

            //传入对象的形式
            ...mapGetters('countAbout',{bigSum:'bigSum'}),            
        },
        methods: {
            ...mapMutations('countAbout',{increment:'ADD',decrement:'DELETE'}),
            ...mapActions('countAbout',{incrementOdd:'addOdd',incrementWait:'addWait'})
            // increment(){
            //     this.$store.commit('ADD',this.num);
            // },
            // decrement(){
            //     this.$store.commit('DELETE',this.num);
            // },
            // incrementOdd(){
            //     this.$store.dispatch('addOdd',this.number);
            // },
            // incrementWait(){
            //     setTimeout(()=>{
            //         this.$store.dispatch('addWait',this.number);
            //     },1000)
            // },
        },
    }
</script>

<style>
    button{
        margin: 0px 5px;
    }
</style>