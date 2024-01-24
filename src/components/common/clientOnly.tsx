import React, { ReactNode, useEffect, useState } from "react"

type Props = {
  children: ReactNode
}

const ClientOnly: React.FC<Props> = ({ children, ...delegated }) => {
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    // This will only be called once the component is mounted inside the browser
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  return <div {...delegated}>{children}</div>
}

export default ClientOnly
