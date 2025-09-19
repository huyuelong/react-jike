import { createSlice } from "@reduxjs/toolkit";
import { request, getToken, setToken } from '@/utils'

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken() || '',
        userInfo: {}
    },
    // 同步修改方法
    reducers: {
        setUserToken: (state, action) => {
            state.token = action.payload
            // localstorage存一份
            setToken(action.payload)
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

const { setUserInfo, setUserToken } = userStore.actions

const userReducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setUserToken(res.data.token))
    }
}
// 获取用户信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('user/profile')
        dispatch(setUserInfo(res.data))
    }
}

export { fetchLogin, fetchUserInfo }

export default userReducer