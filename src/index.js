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

// 每一秒重新渲染一次

// const demo = () => {
//   const ele = (
//     <div>
//       <p>{new Date().toLocaleTimeString()}</p>
//       <p>{new Date().toString()}</p>
//     </div>
//   )
//   ReactDOM.render(
//     ele,
//     document.getElementById('root')
//   )
// }
// setInterval(demo, 1000)

// 定义一个基础组件

// const demo = (props) => <h1>Hello, {props.name}</h1>
// ReactDOM.render(
//   demo({
//     name: 'liyang'
//   }),
//   document.getElementById('root')
// )

// 另一种调用方式

// const Demo = (props) => <h1>Hello, {props.name}</h1>
// const ele = <Demo name="liyang"/>
// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// )

// 使用class

// class Demo extends React.Component {
//   render () {
//     return <h1>Hello, {this.props.name}</h1>
//   }
// }
// ReactDOM.render(
//   <Demo name="liyang" />,
//   document.getElementById('root')
// )

// 组合组件

// class Hello extends React.Component {
//   render () {
//     return <h1>Hello, my name is {this.props.name}</h1>
//   }
// }
// const ele = (
//   <div>
//     <Hello name="liyang"></Hello>
//     <Hello name="xiaoMing"></Hello>
//     <Hello name="xiaoHong"></Hello>
//     <Hello name="your father"></Hello>
//   </div>
// )
// ReactDOM.render(
//   ele,
//   document.getElementById('root')
// )

// 改写时钟的例子

// class Clock extends React.Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       date: new Date()
//     };
//   }
//   componentDidMount() {
//     this.timerID = setInterval(
//       () => this.tick(),
//       1000
//     );
//   }
//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }
//   tick() {
//     this.setState({
//       date: new Date()
//     });
//   }
//   render () {
//     return <h1>{this.state.date.toLocaleTimeString()}</h1>
//   }
// }
// ReactDOM.render(
//   <Clock></Clock>,
//   document.getElementById('root')
// )

// 一个组件自身更新的例子
