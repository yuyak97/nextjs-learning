import React from "react"

type Props = {
  placeholder: string
  errorMessage?: string
}

const FormTextarea = React.forwardRef<HTMLTextAreaElement, Props>(
  ({ placeholder, errorMessage, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className="z-10 w-full flex-grow border-b-2 bg-transparent focus:border-blue-500 focus:outline-none dark:border-white"
        placeholder={placeholder}
        {...props}
      />
    )
  },
)

FormTextarea.displayName = "FormTextarea"

export default FormTextarea
