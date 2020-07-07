// 这里的node代码 会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import routes from '../src/App'
import store from '../src/store/store'

const app = express()
app.use(express.static('public'))

// app.get('/', (req, res) => {
//     // const Page = <App title='努力学习'></App>
//     // 把react组件，解析成html
//     const content = renderToString(App)
//     res.send(`
//         <html>
//             <head>
//                 <meta chartset="utf-8" />
//                 <title>react ssr</title>
//             </head>
//             <body>
//                 <div id="root">${content}</div>
//             </body>
//             <script src="/bundle.js"></script>
//         </html>
//     `)
// })

// 路由
app.get('*', (req, res) => {
    // 存储网络请求
    const promise = []
    // routes.some(route => {
    //     const match = matchPath(req.path, route)
    //     if(match) promise.push(route.loadData(matcha))
    //     return match
    // })
    //  根据上面的some调整
    routes.some(route => {
        const match = matchPath(req.path, route)
        if(matcha) {
            const {loadData} = route.component
            if(loadData){
                promise.push(route.loadData(store))
            }
        }
    })
    // 等待所有网络请求结束再渲染
    Promise.all(promise).then(() => {
        // 获取根据路由渲染出的组件，并且拿到loadData方法，获取数据
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter location={req.url}>
                    {routes.map(route => <Route {...route}></Route>)}
                </StaticRouter>
            </Provider>
        )
        res.send(`
         <html>
             <head>
                 <meta chartset="utf-8" />
                 <title>react ssr</title>
             </head>
             <body>
                 <div id="root">${content}</div>
             </body>
             <script>
                window.__context = ${}
             </script>
             <script src="/bundle.js"></script>
         </html>
     `)
    })
})
app.listen(9093, () => {
    console.log('监听完毕')
})