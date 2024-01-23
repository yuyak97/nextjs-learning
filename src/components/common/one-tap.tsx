"use client"

import useOneTapSignin from "@/hooks/useOneTapSignin"

const OneTapComponent = () => {
  const { isLoading: oneTapIsLoading } = useOneTapSignin({
    redirect: false,
    parentContainerId: "oneTap",
  })

  return <div id="oneTap" className="fixed top-0 right-0 " /> // This is done with tailwind. Update with system of choice
}

export default OneTapComponent
