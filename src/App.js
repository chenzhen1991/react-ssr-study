// import React, {useState} from 'react'
//
// function App(props){
//     const [count, setCount] = useState(1)
//     return <div>
//         <h1>跩跩珍 {props.title} {count}</h1>
//         <button onClick={() =>setCount(count+1)}>累加</button>
//     </div>
// }
//
// export default <App title="跩跩珍"></App>

// 抽里成入口文件
import React from 'react'
import {Route} from 'react-router-dom'
import Index from './container/Index'
import About from "./container/About"
import User from "./container/User"
import user from "./store/user";
// export default (
//     <div>
//         <Route path="/" exact component={Index}></Route>
//         <Route path="/about" exact component={About}></Route>
//     </div>
// )

// 改造成js的配置 才能获取组件
export default [
    {
        path: '/',
        component: Index,
        loadData: Index.loadData,
        exact: true,
        key: 'index'
    },
    {
        path:'/about',
        component: About,
        exact: true,
        key: 'about'
    },
    {
        path:'/user',
        loadData: User.loadData,
        component: User,
        exact: true,
        key: 'user'
    }
]