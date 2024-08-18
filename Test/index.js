// const course = {
//     name: "Js basic",
//     getName: function () {
//         return this;
//     }
// }
// console.log(course.getName())
// const Course = function (name, price) {
//     this.name = name;
//     this.price = price
// }
// const jsCourse = new Course('js', 100);
// console.log(jsCourse)
// import logger from './logger.js'
// logger('test', 'warn')
// var name = 'Javascript';
// var price = 1000;
// var course = {
//     name,
//     price,
//     getName() {
//         return name
//     }
// }
// console.log(course.getName())
// var fieldName = 'name';
// var fieldPrice = 'price';
// const course = {
//     [fieldName]: 'js',
//     [fieldPrice]: 100
// }
// console.log(course)
// function logger({ name, price, ...rest }) {
//     console.log(rest)
//     console.log(name)
// }
// logger({
//     name: 'js',
//     price: 1000,
//     description: 'Description content'
// })
// var arr = ['JS', 'Ruby', 'PHP'];
// var arr2 = ['ReactJS', 'Dart'];
// var arr3 = [...arr2, ...arr]
// console.log(arr3)
// var obj1 = {
//     name: 'JS'
// }
// var obj2 = {
//     price: 1000
// }
// var obj3 = {
//     ...obj1,
//     ...obj2
// }
// console.log(obj3)
// var arr = [
//     'JS',
//     'PHP',
//     'Ruby',
//     'Java'
// ]
// function logger(...rest) {
//     for (var i = 0; i < rest.length; i++) {
//         console.log(rest[i])
//     }
// }
// logger(...arr)
// var arr = ['js', 'php', 'ruby'];
// var [a, b, c] = arr;
// console.log(a, b, c)
// var course = {
//     name: 'js',
//     price: 1000,
//     image: './img/anh.jpg',
//     children: {
//         name: 'ReactJS'
//     }
// };
// var { name: parenName, price, image, children: { name } } = course;
// console.log(name)