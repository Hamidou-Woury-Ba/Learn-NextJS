import React, { cache } from 'react'

interface User {
    id: number
    name: string
}

const UsersPage = async () => {

    const res = await fetch(
        'https://jsonplaceholder.typicode.com/users',
        {
            cache: 'no-store' // Force le navigateur à ne pas utiliser le cache pour cette requête 
            // next : {
            //     revalidate: 10, // Revalide la page toutes les 10 secondes
            // }
        },
    )
    const users : User[] = await res.json()

  return (
    <>
      <h1 className='text-2xl font-bold'>Users</h1>
      <p className='pt-5'> { new Date().toLocaleTimeString() } </p>
      <ul className='py-10 px-10'>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  )
}

export default UsersPage
