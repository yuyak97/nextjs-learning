/** @jsxImportSource @emotion/react */
import useOneTapSignin from "@/hooks/useOneTapSignin"
import { css } from "@emotion/react"

const oneTapStyle = css({
  position: "fixed",
  right: 0,
  top: 0,
})

const OneTapComponent = () => {
  const { isLoading: oneTapIsLoading } = useOneTapSignin({
    redirect: false,
    parentContainerId: "oneTap",
  })

  return <div id="oneTap" css={oneTapStyle} />
}

export default OneTapComponent
