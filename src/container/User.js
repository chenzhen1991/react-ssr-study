import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import {getUserInfo} from '../store/user'

function User(props){
    return <div>
    <h1>
    你好{props.userinfo.title},你们是嘴优秀的人{props.userinfo.best}
</h1>
    </div>
}

User.loadData = (store) => {
    return store.dispatch(getUserInfo())
}
export default connect(
    state => {
        console.log('state', state.user)
        return {userinfo:state.user.userinfo}
    },
    // state => ({list:state.index.list}),
    // {getIndexList}
)(User)