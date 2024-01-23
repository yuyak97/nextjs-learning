import { useState, useEffect } from "react"

const useSigninEmail = () => {
  const [email, setEmail] = useState(null)

  useEffect(() => {
    // Load Google One Tap script and initialize it
    window.google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: handleCallbackResponse,
    })

    // Display the One Tap prompt
    window.google.accounts.id.prompt()

    // Callback function to handle the response
    function handleCallbackResponse(response) {
      if (response && response.credential) {
        const decodedJWT = parseJwt(response.credential)
        setEmail(decodedJWT.email)
      }
    }

    // Function to parse the JWT token
    function parseJwt(token) {
      try {
        const base64Url = token.split(".")[1]
        const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/")
        return JSON.parse(window.atob(base64))
      } catch (error) {
        return null
      }
    }
  }, [])

  return email
}

export default useSigninEmail
