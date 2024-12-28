// let a: number = 100;
// console.log(a);


// function getToString(target: Function) {
//     target.prototype.toString = function () {
//         return JSON.stringify(this);
//     }
// }

// @getToString
// class Student {
//     constructor(public name: string, public age: number) { };
//     public study() {
//         console.log('studying...');
//     }
// }

// let stu = new Student('zhangsan', 18);
// console.log(stu);
// console.log(stu.toString());

// function Temp(target: Function) {
//     return class People {
//         constructor(public name: string, public age: number) { };
//         test() {
//             console.log(111);
//             console.log(222);
//             console.log(333);
//         }
//     }
// }

// @Temp
// class Student {
//     constructor(public name: string, public age: number) { };
//     test() {
//         console.log(444);
//     }
// }
// let stu = new Student('lisi', 18);
// console.log(stu);

// 构造类型
// type Constructor = {
//     new(...args: any[]): {};
//     id: number;
// }
// type Constructor = {
//     new(...args: any[]): {};
//     id: number;
// }

// function Temp(target: Constructor) {
//     // ...
// }

// @Temp
// class Student {
//     public static id = 100;
//     constructor(public name: string, public age: number) { };
// }

// console.log(Student.id);

// type Constructor = new (...args: any[]) => {};

// function Temp<T extends Constructor>(target: T) {
//     return class extends target {
//         public date: Date;
//         constructor(...args: any[]) {
//             super(...args);
//             this.date = new Date();
//         }
//         public getDate(): void {
//             console.log(this.date);
//         }
//     }
// }

// @Temp
// class Student {
//     constructor(public name: string, public age: number) { };
// }

// let stu = new Student('lisi', 18);
// interface Student {
//     getDate(): void;
// }
// stu.getDate();

// type Constructor = new (...args: any[]) => {};
// function Temp(n: number) {
//     return function test(target: Constructor) {
//         target.prototype.print = function () {
//             for (let i = 0; i < n; i++) {
//                 console.log(this.name + " " + this.age);
//             }
//         }
//     }
// }

// @Temp(5)
// class Student {
//     constructor(public name: string, public age: number) { };
// }

// let stu = new Student('lisi', 18);
// interface Student {
//     print(): void;
// }
// stu.print()

class People {
    constructor(public name: string, public age: number) { };
}

class Student extends People {

    constructor(public name: string, public age: number) {
        super(name, age);
    };
}













