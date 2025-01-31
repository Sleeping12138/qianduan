new Proxy(data, {
    // 拦截读取属性值
    get(target, prop) {
        return Reflect.get(target, prop)
    },
    // 拦截设置属性值或添加新属性
    set(target, prop, value) {
        return Reflect.set(target, prop, value)
    },
    // 拦截删除属性
    deleteProperty(target, prop) {
        return Reflect.deleteProperty(target, prop)
    }
})


