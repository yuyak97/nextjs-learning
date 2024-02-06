import React, { RefObject } from "react"

type Props = {
  value: string
}

const Input = React.forwardRef<HTMLInputElement, Props>(({ value }, ref) => {
  return (
    <input
      ref={ref}
      type="text"
      className="flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
      defaultValue={value || ""}
    />
  )
})

Input.displayName = "Input"

export default Input
