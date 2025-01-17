<template>
    <div>
        <h1>当前求和为：{{ n }}</h1>
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
                n:0,
                number:1
            }
        },
        methods: {
            increment(){
                this.n+=this.number;
            },
            decrement(){
                this.n-=this.number;
            },
            incrementOdd(){
                if(this.n%2==1){
                    this.n+=this.number;
                }
            },
            incrementWait(){
                setTimeout(()=>{
                    this.n+=this.number;
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