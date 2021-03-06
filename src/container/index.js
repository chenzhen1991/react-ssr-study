import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getIndexList} from '../store/index'
import Header from '../component/Header'
function Index(props) {
    const [count, setCount] = useState(1)
    // 注释 因为要放在客户端渲染
    useEffect(() => {
        if(!porps.list.length){
            props.getIndexList()
        }
    }, [])
    console.log('props.list', props)
    return <div>
        <Header />
        <h1>跩跩珍  {props.title}! {count}</h1>
        <button onClick={() => setCount(count+1)}>累加</button>
        <hr />
        <ul>
            {props.list.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
        </ul>
    </div>
}
Index.loadData = (store) => {
    return store.dispatch(getIndexList())
}

export default connect(
    state => ({list:state.index.list}),
    {getIndexList}
)(Index)