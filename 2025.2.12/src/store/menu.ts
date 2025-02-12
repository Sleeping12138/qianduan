import { defineStore } from 'pinia';

const localData = JSON.parse(localStorage.getItem('menu')) || {};

const useMenuStore = defineStore('menu', {
    state() {
        return localData ? localData : {
            isCollapse: false,
            selectMenu: [],
            routeList: []
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
        },
        dynamicMenu(payload) {
            const modules = import.meta.glob('../pages/**/**/*.vue')
            function getRouteList(route) {
                route.forEach(item => {
                    if (!item.children) {
                        const path = `../pages${item.meta.path}/index.vue`;
                        item.component = modules[path];
                    } else {
                        getRouteList(item.children);
                    }
                });
            }
            getRouteList(payload);
            this.routeList = payload;
        }
    },
    persist: true
})

export default useMenuStore;