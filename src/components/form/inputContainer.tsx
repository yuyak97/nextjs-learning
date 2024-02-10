import React, { PropsWithChildren } from "react"

const InputContainer: React.FC<PropsWithChildren> = ({ children }) => {
  return <div className="my-2">{children}</div>
}

export default InputContainer
