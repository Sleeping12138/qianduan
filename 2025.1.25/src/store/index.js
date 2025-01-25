import Vue from "vue";
import vuex from 'vuex';

Vue.use(vuex);

const actions = {
    add(context, value) {
        context.commit('ADD', value);
    },
    del(context, value) {
        context.commit('DEL', value)
    }
};
const mutations = {
    ADD(state, value) {
        state.number += value;
    },
    DEL(state, value) {
        state.number -= value;
    }
};
const state = {
    number: 100,
    name: 'zhangsan',
    age: 18
};

const getters = {
    bigNumber(state) {
        return state.number * 100;
    }
}

export default new vuex.Store({
    actions,
    mutations,
    state,
    getters
})