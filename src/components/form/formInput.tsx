"use client"

import React from "react"

type Props = {
  placeholder: string
  errorMessage?: string
}

const FormInput = React.forwardRef<HTMLInputElement, Props>(
  ({ placeholder, errorMessage, ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="text"
        className="z-10 w-full flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
        placeholder={placeholder}
        {...props}
      />
    )
  },
)

FormInput.displayName = "FormInput"

export default FormInput
