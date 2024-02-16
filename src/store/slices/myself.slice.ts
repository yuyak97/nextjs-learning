import { GamingHistoryResponse } from "@/api/type/gaming-history.types"
import { UserResponse, UserUpdateRequest } from "@/api/type/user.types"
import { ReduxToolkitSlice } from "@/enums/slice.enum"
import { User } from "@prisma/client"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

type InitialState = {
  myself: UserResponse | null
  gamingHistories: GamingHistoryResponse[]
}

export const getMyselfThunk = createAsyncThunk(
  `${ReduxToolkitSlice.MYSELF}/getMyselfThunk`,
  async () => {
    const { data } = await axios.get<UserResponse>(`/api/myself`)
    return data
  },
)

export const updateMyselfThunk = createAsyncThunk(
  `${ReduxToolkitSlice.MYSELF}/updateMyselfThunk`,
  async (body: UserUpdateRequest) => {
    const { data } = await axios.put<UserResponse>(`/api/myself`, body)
    return data
  },
)

export const getMyselfGamingHistory = createAsyncThunk(
  `${ReduxToolkitSlice.MYSELF}/getMyselfGamingHistory`,
  async () => {
    const { data } = await axios.get(`/api/myself/gaming-histories`)
    return data
  },
)

const initialState: InitialState = {
  myself: null,
  gamingHistories: [],
}

const userSlices = createSlice({
  name: ReduxToolkitSlice.MYSELF,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMyselfThunk.fulfilled, (state, action) => {
      state.myself = action.payload
    }),
      builder.addCase(getMyselfGamingHistory.fulfilled, (state, action) => {
        state.gamingHistories = action.payload
      }),
      builder.addCase(updateMyselfThunk.fulfilled, (state, action) => {
        state.myself = action.payload
      })
  },
})

export const { reducer: myselfReducer, actions: myselfActions } = userSlices
