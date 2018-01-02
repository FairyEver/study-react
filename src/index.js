import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// 基础写法

// ReactDOM.render(
//   <h1>Hello World</h1>,
//   document.getElementById('root')
// );

// 使用函数返回值

// function demo (name) {
//     return (
//       <h1>Hello world</h1>
//     )
// }
// ReactDOM.render(
//   demo(),
//   document.getElementById('root')
// )

// 使用变量

// const ele = (
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//     <li>4</li>
//   </ul>
// )
// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// )

// 小测试

// const nameMaker = (name = 'liyang') => `my name is ${name}`
// const user = [
//   'xiaoming',
//   'xiaohong'
// ]
// const ele = (
//   <ul>
//     <li>{nameMaker()}</li>
//     <li>{nameMaker(user[0])}</li>
//     <li>{nameMaker(user[1])}</li>
//   </ul>
// )
// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// )

// 判断语句

// const demo = (value) => value > 10 ? <h1>{value} 大于 10</h1> : <p>{value} 小于 10</p>
// ReactDOM.render(
//   demo(7),
//   document.getElementById('root')
// )

// JSX 属性

// ReactDOM.render(
//   <p title="liyang">Hello world</p>,
//   document.getElementById('root')
// )