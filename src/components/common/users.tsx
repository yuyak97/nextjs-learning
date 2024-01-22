import React, { useEffect, useState } from "react"

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users")
      const data = await response.json()
      setUsers(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  )
}

export default Users
