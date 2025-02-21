import { defineStore } from 'pinia';

export const useCountStore = defineStore('count', {
    state() {
        return {
            num: 0,
        }
    },
    actions: {

    },
    getters: {

    },

    persist: {
        key: 'test',
        storage: localStorage,
        paths: ['num']
    }

})