import React, { cache } from 'react'

interface User {
    id: number
    name: string
}

const UsersPage = async () => {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            //cache: 'no-store' // Force le navigateur à ne pas utiliser le cache pour cette requête 
            next : {
                revalidate: 10, // Revalide la page toutes les 10 secondes
            }
        },
    )
    const users : User[] = await res.json()

  return (
    <>
      <h1>Users</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage
