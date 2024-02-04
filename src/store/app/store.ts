import { ReduxToolkitSlice } from "@/enums/slice.enum"
import { configureStore } from "@reduxjs/toolkit"
import { thunkLoaderReducer } from "@/store/slices/common/thunk-loader.slice"
import { thunkLoaderMiddleware } from "@/store//generic/thunk-loader.middleware"
import { myselfReducer } from "../slices/myself.slice"

export const store = configureStore({
  reducer: {
    [ReduxToolkitSlice.THUNK_LOADER]: thunkLoaderReducer,
    [ReduxToolkitSlice.MYSELF]: myselfReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(thunkLoaderMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppThunkAPI = { state: RootState; dispatch: AppDispatch }
