import React, { cache } from 'react'

interface User {
  id: number,
  name: string,
  email: string
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
  const users: User[] = await res.json()

  return (
    <>
      <h1 className='text-2xl font-bold'>Users</h1>
      <p className='pt-5'> {new Date().toLocaleTimeString()} </p>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default UsersPage
