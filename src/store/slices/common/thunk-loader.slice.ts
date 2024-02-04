import { ReduxToolkitSlice } from "@/enums/slice.enum"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

type ThunkLoaderState = {
  loadingThunks: string[]
}
const INITIAL_STATE: ThunkLoaderState = { loadingThunks: [] }

const thunkLoaderSlice = createSlice({
  name: ReduxToolkitSlice.THUNK_LOADER,
  initialState: INITIAL_STATE,
  reducers: {
    start: (state, { payload: { name } }: PayloadAction<{ name: string }>) => {
      state.loadingThunks = [...state.loadingThunks, name]
    },
    end: (state, { payload: { name } }: PayloadAction<{ name: string }>) => {
      let found = false
      state.loadingThunks = state.loadingThunks.filter((thunk) => {
        if (thunk !== name) return true

        if (!found) {
          found = true
          return false
        }

        return true
      })
    },
  },
})

export const { reducer: thunkLoaderReducer, actions: thunkLoaderActions } =
  thunkLoaderSlice
