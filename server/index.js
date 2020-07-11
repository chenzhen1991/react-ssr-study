// 这里的node代码 会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import {StaticRouter, matchPath, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import proxy from 'http-proxy-middleware'
import routes from '../src/App'
import {getServerStore} from '../src/store/store'

const store = getServerStore()
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
// 客户端转发来的api开头的请求
// app.use('/api', proxy({target: 'http://localhost:9091', changeOrigin: true}));
// 路由
app.get('*', (req, res) => {
    // 存储网络请求
    const promises = []
    // routes.some(route => {
    //     const match = matchPath(req.path, route)
    //     if(match) promise.push(route.loadData(matcha))
    //     return match
    // })
    //  根据上面的some调整
    routes.some(route => {
        const match = matchPath(req.path, route)
        if(match) {
            const {loadData} = route.component
            if(loadData){
                // 包装后
                // 规避报错 可以考虑加日志
                const promise = new Promise((resolve, reject) => {
                    loadData(store).then(resolve).catch(resolve)
                })
                promises.push(promise)
            }
        }
    })
    // 等待所有网络请求结束再渲染
    Promise.all(promises).then(() => {
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
                window.__context = ${JSON.stringify(store.getState())}
             </script>
             <script src="/bundle.js"></script>
         </html>
     `)
    }).catch(()=>{
        res.send('页面报错500')
    })
})
app.listen(9093, () => {
    console.log('监听完毕')
})