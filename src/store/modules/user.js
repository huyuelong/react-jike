import { createSlice } from "@reduxjs/toolkit";
import { request } from '@/utils'

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: localStorage.getItem('token-key') || ''
    },
    // 同步修改方法
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload
            // localstorage存一份
            localStorage.setItem('token-key', action.payload)
        }
    }
})

const { setToken } = userStore.actions

const userReducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setToken(res.data.token))
    }
}

export { setToken, fetchLogin }

export default userReducer