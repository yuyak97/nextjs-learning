import React, { RefObject } from "react"

type Props = {
  defaultValue: string
  placeholder?: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  ({ defaultValue, placeholder }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className="w-full flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
        defaultValue={defaultValue || ""}
        placeholder={placeholder}
      />
    )
  },
)

Input.displayName = "Input"

export default Input
