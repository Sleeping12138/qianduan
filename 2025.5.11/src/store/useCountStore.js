import { defineStore } from 'pinia';
export const useCountStore = defineStore('count', {
    state: () => ({
        id: '001',
        name: 'zhangsan',
        age: 18
    }),
    actions: {
        // 写方法
    },
    getters: {
        getAge() {
            return this.age
        }
    },
    persist: {
        key: 'test',
        storage: localStorage
    }
})