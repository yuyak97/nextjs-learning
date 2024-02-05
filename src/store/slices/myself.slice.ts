import { UserResponse, UserUpdateRequest } from "@/api/type/user"
import { ReduxToolkitSlice } from "@/enums/slice.enum"
import { User } from "@prisma/client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
  myself: UserResponse | null
}

export const getMyselfThunk = createAsyncThunk(
  `${ReduxToolkitSlice.MYSELF}/getMyselfThunk`,
  async (email: string) => {
    const { data } = await axios.get<UserResponse>(`/api/users/?email=${email}`)
    return data
  },
)

export const updateMyselfThunk = createAsyncThunk(
  `${ReduxToolkitSlice.MYSELF}/updateMyselfThunk`,
  async ({ id, body }: { id: string; body: UserUpdateRequest }) => {
    const { data } = await axios.put<UserResponse>(`/api/users/${id}`, body)
    return data
  },
)

const initialState: InitialState = {
  myself: null,
}

const userSlices = createSlice({
  name: ReduxToolkitSlice.MYSELF,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyselfThunk.pending, (state) => {})
    builder.addCase(getMyselfThunk.fulfilled, (state, action) => {
      state.myself = action.payload
    }),
      builder.addCase(updateMyselfThunk.pending, (state) => {})
    builder.addCase(updateMyselfThunk.fulfilled, (state, action) => {
      state.myself = action.payload
    })
  },
})

export const { reducer: myselfReducer, actions: myselfActions } = userSlices
