export default {
    namespaced: true,
    actions: {
        addPersonFirstName(context, value) {
            if (value.name.indexOf('王') === 0) {
                context.commit('ADD_PERSON', value)
            } else {
                alert('添加的人员必须姓王!!!')
            }
        },
        getPeopleServer(context) {
            axios.get('').then((result) => {
                context.commit('ADD_PERSON', result.data)
            }).catch((err) => {
                console.log(err.data);
            });
        }
    },
    mutations: {
        ADD_PERSON(state, value) {
            state.person.push(value);
        },
    },
    state: {
        person: [{ id: '001', name: 'zhangsan' }]
    },
    getters: {
        firstPeople(state) {
            return state.person[0].name;
        }
    }
}