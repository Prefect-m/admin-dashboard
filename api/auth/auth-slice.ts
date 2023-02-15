import { IUser } from '@/../interfaces/user.interface'
import {createSlice} from '@reduxjs/toolkit'
import { login } from './auth.api'

const userState: IUser = {
  name: '',
  email:'',
  avatar: '',
  createdAt: '',
  hashed_rt: '',
  id: null,
  password: '',
  updatedAt: ''
}

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    accessToken: '',
    refreshToken: '',
    errors: '',
    user: userState
  },
  reducers: {},
  extraReducers: build => {
    build
    .addCase(login.pending, (state, {payload}) => {
      state.isLoading = true
    })
    .addCase(login.fulfilled, (state, {payload}) => {
      state.isLoading = false
      state.user = payload.user
      state.accessToken = payload.accessToken
      state.refreshToken = payload.refreshToken
    })
    .addCase(login.rejected, (state, {payload}) => {
      state.isLoading = false
      // @ts-ignore
      state.errors = payload
      state.user = null
      state.accessToken = ''
      state.refreshToken = ''
    })
  }
})