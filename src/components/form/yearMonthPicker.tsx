"use client"

import React from "react"

type Props = {
  defaultValue?: string
}

const YearMonthPicker = React.forwardRef<HTMLInputElement, Props>(
  ({ defaultValue, ...props }, ref) => {
    return (
      <input
        type="month"
        className="flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
        ref={ref}
        defaultValue={defaultValue}
        {...props}
      />
    )
  },
)

YearMonthPicker.displayName = "YearMonthPicker"

export default YearMonthPicker
