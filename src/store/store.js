// 存储的入口
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import indexReducer from './index'

const reducer = combineReducers({
    index: indexReducer
})

// 创建store
// const store = createStore(reducer, applyMiddleware(thunk))

// export default store
export const getServerStore = () => {
    // 通过server的dispatch来获取和充实
    return createStore(reducer, applyMiddleware(thunk))
}

export const getClientStore = () => {
    //服务端用的
    // 通过window.__context来获取数
    const defaultState = window.__context ? window.__content: {}
    return createStore(reducer, defaultState, applyMiddleware(thunk))
}