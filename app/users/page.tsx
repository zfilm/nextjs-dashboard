import React from 'react'

interface User {
    id: number;
    name: string;
    email: string;
}

const UsersPage = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
        //, { next: { revalidate: 10 }}); 
        // { cache: 'no-store' }  // no-store hvis data endres ofte.

    const users: User[] = await res.json();
  return (
    <>
        <h1>Users</h1>
        <table className='table table-zebra'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>E-mail</th>
                </tr>
            </thead>
            <tbody>
                { users.map(user => 
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                    </tr>) 
                }
            </tbody>
        </table>
    </>
  )
}

export default UsersPage