// 单纯的模拟几个接口
const express = require("express")
const app= express()

// 用户信息
app.get('/api/user/info', (req, res) => {
    // 支持跨域调用
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code :0,
        data: {
            title: '跩跩珍的家',
            best: '邹乐诣'
        }
    })
})

// 课程列表
app.get('/api/course/list', (req, res) => {
    // 支持跨域调用
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE')
    res.header('Content-Type', 'application/json;charset=utf-8')
    res.json({
        code :0,
        list: [
            {name: '语文', id: 1},
            {name: '数学', id: 2},
            {name: '英语', id: 3},
            {name: '理综', id: 4},
        ]
    })
})

app.listen(9091, ()=> {
    console.log('mock启动完毕')
})