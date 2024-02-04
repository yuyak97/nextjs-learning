import { ReduxToolkitSlice } from "@/enums/slice.enum"
import { User } from "@prisma/client"
import { createSlice } from "@reduxjs/toolkit"

type InitialState = {
  myself: any | null
}

const initialState: InitialState = {
  myself: null,
}

const userSlices = createSlice({
  name: ReduxToolkitSlice.MYSELF,
  initialState,
  reducers: {},
})

export const { reducer: myselfReducer, actions: myselfActions } = userSlices
