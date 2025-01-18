<template>
    <div>
        <h1>当前求和为：{{ $store.state.n }}</h1>
        <h2>求和放大100倍：{{ $store.getters.bigSum }}</h2>
        <h2>{{ $store.state.name }},{{ $store.state.age }}</h2>
        <select v-model.number="number">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">当前和为奇数再加</button>
        <button @click="incrementWait">等一等再加</button>
    </div>
</template>

<script>
    export default {
        name:'Count',
        data() {
            return {
                number:1
            }
        },
        methods: {
            increment(){
                this.$store.commit('ADD',this.number);
            },
            decrement(){
                this.$store.commit('DELETE',this.number);
            },
            incrementOdd(){
                this.$store.dispatch('addOdd',this.number);
            },
            incrementWait(){
                setTimeout(()=>{
                    this.$store.dispatch('addWait',this.number);
                },1000)
            },
        },
    }
</script>

<style>
    button{
        margin: 0px 5px;
    }
</style>