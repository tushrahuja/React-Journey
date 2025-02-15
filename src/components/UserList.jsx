import React from 'react'

const users = [
  {
    id: 1,
    name: "Alice",
    age: 25,
  },
  {
    id: 2,
    name: "Bob",
    age: 30,
  },
  {
    id: 3,
    name: "Charlie",
    age: 22,
  }
];

const UserList = () => {

  return (
    <main>
      {users.map(({name, age, id}) => (
        <div key={id}>
          <h3>{name}</h3>
          <h3>{age}</h3>
        </div>
      ))}
    </main>
  )
}

export default UserList