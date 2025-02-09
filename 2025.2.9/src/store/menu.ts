import { defineStore } from 'pinia';

const useMenuStore = defineStore('menu', {
    state() {
        return {
            isCollapse: false,
            selectMenu: []
        }
    },
    actions: {
        addMenu(payload) {
            if (this.selectMenu.findIndex(item => item.path === payload.path) === -1) {
                this.selectMenu.push(payload)
            }
        },
        deleteMenu(payload) {
            let index = this.selectMenu.findIndex(item => item.name === payload.name);
            this.selectMenu.splice(index, 1);
        }
    }
})

export default useMenuStore;