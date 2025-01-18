import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const actions = {
    // add(context, value) {
    //     context.commit('ADD', value);
    // },
    // delete(context, value) {
    //     context.commit('DELETE', value)
    // },
    addOdd(context, value) {
        if (context.state.n % 2 == 1) {
            context.commit('ADD', value);
        }
    },
    addWait(context, value) {
        setTimeout(() => {
            context.commit('ADD', value);
        }, 1000)
    }
};
const mutations = {
    ADD(state, value) {
        state.n += value;
    },
    DELETE(state, value) {
        state.n -= value;
    }
};
const state = {
    n: 0,
    name: "zhangsan",
    age: 18
};

// 像配置中的computed
const getters = {
    bigSum(state) {
        return state.n * 100;
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})