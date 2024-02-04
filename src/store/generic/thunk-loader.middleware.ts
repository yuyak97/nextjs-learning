import { Middleware } from "@reduxjs/toolkit"
import { thunkLoaderActions } from "../slices/common/thunk-loader.slice"

const thunkConfigs = [
  { postfixes: ["/fulfilled", "/rejected"], callback: "end" },
  { postfixes: ["/pending"], callback: "start" },
] as const

const getThunkTypePrefix = (action: string) => {
  const match = action.match(/(.*)(\/rejected|\/fulfilled|\/pending)/)

  return match && match[1]
}

// This middleware sets the loading state of a thunk based on it's thunk actions (rejected,fulfilled,pending)
export const thunkLoaderMiddleware: Middleware =
  ({ dispatch }) =>
  (next) =>
  (action) => {
    // for thunk actions:
    // action.type -> adminNotifications/confirmNotification/rejected
    // typePrefix -> adminNotifications/confirmNotification

    // for simple actions
    // action.type -> adminNotifications/resetSelected
    // typePrefix -> ''
    const typePrefix = getThunkTypePrefix(action.type)

    if (typePrefix) {
      thunkConfigs.forEach(({ postfixes, callback }) => {
        if (postfixes.some((postfix) => action.type.includes(postfix))) {
          dispatch(
            thunkLoaderActions[callback]({
              name: typePrefix,
            }),
          )
        }
      })
    }

    next(action)
  }
