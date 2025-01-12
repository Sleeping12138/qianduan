let peopleSex = 'male'
let p = {
    name: 'zhangsan',
    age: 18
}

Object.defineProperty(p, 'sex', {
    // value: 'male',
    // enumerable: true,
    // writable: true,
    // configurable: true,
    get() {
        return peopleSex
    },
    set(value) {
        console.log('change');
        peopleSex = value
    }
})









