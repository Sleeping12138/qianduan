export default {
    namespaced: true,
    actions: {
        addOdd(context, value) {
            if (context.state.n % 2 == 1) {
                context.commit('ADD', value);
            }
        },
        addWait(context, value) {
            setTimeout(() => {
                context.commit('ADD', value);
            }, 1000)
        },

    },
    mutations: {
        ADD(state, value) {
            state.n += value;
        },
        DELETE(state, value) {
            state.n -= value;
        },
    },
    state: {
        n: 0,
        name: 'zhangsan',
        age: 18,
    },
    getters: {
        bigSum(state) {
            return state.n * 100;
        }
    }
}