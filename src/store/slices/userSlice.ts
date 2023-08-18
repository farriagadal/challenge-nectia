import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import User from 'src/models/User'

export interface UserState {
  user: User
}

const initialState: UserState = {
  user: {}
}

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer
