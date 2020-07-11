import axios from 'axios'
const GET_USER = 'INDEX/GET_USER'

const changeUserInfo = data =>{
    type: GET_USER,
    data
}

export const getUserInfo = server => {
    return(dispatch, getState, axiosInstance) => {
        return axios.get('/api/user/info')
            .then(res => {
                const {data} = res.data
                dispatch(changeUserInfo(data))
            })
    }
}

const defaultState = {
    userinfo: {}
}

export default(state = defaultState, action) => {
    switch(action.type){
        case GET_USER:
            const newState = {
                ...state,
                userinfo: action.data
            }
            console.log('newState', newState)
            return newState
        default:
            return state
    }
}