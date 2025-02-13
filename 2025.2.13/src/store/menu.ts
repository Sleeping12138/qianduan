import { defineStore } from 'pinia';


const useMenuStore = defineStore('menu222', {
    state() {
        return {
            isCollapse: false,
            selectMenu: [],
            routeList: [],
            menuActive: '1-1'
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
                    // 将后端发送过来的数据与路由文件进行绑定，然后存储起来
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
        },
        updateActive(payload) {
            this.menuActive = payload
        }
    },
    persist: {
        key: 'menu',
        storage: localStorage
    }
})

export default useMenuStore;