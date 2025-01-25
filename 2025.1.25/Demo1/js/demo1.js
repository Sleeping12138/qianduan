let p = {
    name: 'zhangsan',
    age: 19
}
console.log(p);

Object.defineProperty(p, 'sex', {
    value: 'male'
})

console.log(p);