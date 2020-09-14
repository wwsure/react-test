/*
 * @Description: 
 * @author: wangxiuting
 * @Date: 2020-09-14 17:03:32
 * @lastEditors: wangxiuting
 * @LastEditTime: 2020-09-14 18:00:30
 * @FilePath: \test\demo\src\index.js
 * @GlobalData: data
 */
import React , {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// function tick() {
//   const element = (
//     <div>
//       <h1>Hello World!</h1>
//       <p>{new Date().toLocaleTimeString()}</p>
//     </div>  
//   )
//   ReactDOM.render(
//     element,
//     document.getElementById('root') // 假设页面上有一个id为root的元素
//   )
// }
// setInterval(tick, 1000)

// function Man(){
//   return <p>im man</p>
// }
// function Woman(){
//   return <p>im girl</p>
// }
// function Human(props){
//   // 三元表达式写法
//   // return props.human ? <Man /> :<Woman />
  
//   // 短路写法 如果human为true name返回man组件 反之 为空
//   return props.human && <Man />
// }
// ReactDOM.render(<Human human={true}/> , document.getElementById('root'))

// function UserGreeting () {
//   return <h1>Welcom back!</h1>
// }
// function GuestGreeting () {
//   return <h1>Please Sign up.</h1>
// }
// function Button (props) {
//   return <button onClick={ props.handleToggle }>toggle me</button>
// }

// class App extends React.Component {
//   constructor (props) {
//     super(props)
//     this.state = {
//       prevState: false
//     }
//   }
//   handleClick () {
//     this.setState(prevState => ({ isLoggedIn: !prevState.isLoggedIn }))
//   }
//   render () {
//     let greeting = this.state.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
//     return (
//       <div>
//         <div><Button handleToggle={this.handleClick.bind(this)} /></div> // 注意this的重定向
//         { greeting }
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <App isLoggedIn={false} />,
//   document.getElementById('root')
// )

class List extends Component{
  // render(){
  // let list = this.props.arr.map(item =><li>{item}</li>)
  //   return(
  //   <ul>{list}</ul>
  //   )
  // }

  render(){
    return (
      <ul>
        {this.props.arr.map(item =>(<li key={item}>{item}</li>))}
      </ul>
    )
  }
}
ReactDOM.render(<List arr = {[1,2,3,4]}/>, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
