import { createSlice } from "@reduxjs/toolkit";
import { request, getToken, setToken } from '@/utils'

const userStore = createSlice({
    name: 'user',
    // 数据状态
    initialState: {
        token: getToken || ''
    },
    // 同步修改方法
    reducers: {
        setUserInfo: (state, action) => {
            state.token = action.payload
            // localstorage存一份
            setToken(action.payload)
        }
    }
})

const { setUserInfo } = userStore.actions

const userReducer = userStore.reducer

// 异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)
        dispatch(setUserInfo(res.data.token))
    }
}

export { setUserInfo, fetchLogin }

export default userReducer