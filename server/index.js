// 这里的node代码 会用babel处理
import React from 'react'
import {renderToString} from 'react-dom/server'
import express from 'express'
import App from '../src/App'

const app = express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    // const Page = <App title='努力学习'></App>
    // 把react组件，解析成html
    const content = renderToString(App)
    res.send(`
        <html>
            <head>
                <meta chartset="utf-8" />
                <title>react ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="/bundle.js"></script>
        </html>
    `)
})
app.listen(9093, () => {
    console.log('监听完毕')
})