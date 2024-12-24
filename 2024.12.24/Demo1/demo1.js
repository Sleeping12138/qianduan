// let p = {
//     name: 'zhangsan',
//     age: 18,
//     sex: 'male'
// }

// console.log(Object.entries(p));

// let array = [['name', 'zhangsan'], ['age', 18], ['sex', 'male']];
// // { name: 'zhangsan', age: 18, sex: 'male' }
// console.log(Object.fromEntries(array));

// let str = "  hello world  ";
// console.log(str.trim());

// let array = [1, 2, 3, 4, [[5, 6], [7, 8, 9]]];
// // [ 1, 2, 3, 4, [ 5, 6 ], [ 7, 8, 9 ] ]
// console.log(array.flat());

// let array = [1, 2, 3, 4];
// let ret = array.map(item => {
//     return item * 10;
// })
// // [ 10, 20, 30, 40 ]
// console.log(ret);

// let ret = Symbol('hello');
// // hello
// console.log(ret.description);

// class People {
//     #id;
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     get getId() {
//         return this.#id;
//     }
//     set setId(id) {
//         this.#id = id;
//     }
// }
// let p = new People('zhangsan', 18);
// p.setId = 100;
// console.log(p.getId);

// let p1 = Promise.resolve('hello world');
// let p2 = Promise.reject('error');
// let ret = Promise.allSettled([p1, p2]);
// console.log(ret);

// let str = 'hello world,hello java,hello javascript';
// let reg = /hello \w+/g;
// let ret = str.matchAll(reg);
// for (const element of ret) {
//     console.log(element);
// }

// let p = {
//     name: 'zhangsan',
//     age: 18,
//     study() {
//         console.log('studying...');
//     }
// }

// console.log(p?.study);
// console.log(p?.sex);

// let array = [1, 2, 3, 4, 5];
// console.log(array?.[1]);
// console.log(array?.[5]);

// const btn = document.querySelector('.btn')
// btn.addEventListener('click', () => {
//     import('./demo2.js').then((result) => {
//         console.log(result.hello());
//     }).catch((err) => {
//         console.log(err);
//     });
// })

// let number = 100n;
// console.log(number);

// // JavaScript中的最大安全正数
// let max = Number.MAX_SAFE_INTEGER;
// // BigInt类型只能和BigInt类型进行运算
// console.log(BigInt(max) + BigInt(1000));


class People {
    sex;
}
class Student extends People {
    name;
}
let stu = new Student();
console.log(Object.hasOwn(stu, 'name'));
console.log(Object.hasOwn(stu, 'sex'));

// People {}
// console.log(Student.prototype);
// let stu2 = new Student();
// // true
// console.log(Object.getPrototypeOf(stu1) === Object.getPrototypeOf(stu1));
// stu.name = 'zhangsan';
// console.log(undefined);
// // 使用对象获取
// console.log(stu.__proto__);
// // 调用方法
// console.log(Object.getPrototypeOf(stu));
// // 使用类获取
// console.log(Student.prototype);