import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', () => {
    let sum = 10;
    let name = 'zhangsan';
    let age = 18;

    function print() {
        console.log(sum, name, age);
    }

    return {
        sum, name, age, print
    }
})