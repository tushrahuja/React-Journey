import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'


const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Tushar Ahuja" });

  const updateUser = (newName) => {
    setUser({ name: newName })
  }

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  )
}

export {UserContext, UserProvider}