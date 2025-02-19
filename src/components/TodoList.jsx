import React from 'react'
import { useState } from 'react'

const TodoList = () => {
  const [todoList, updatetodoList] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if(inputValue.trim()){
      updatetodoList([...todoList, inputValue]);
      setInputValue("");
    }
  };

  const handleChange = e => {
    setInputValue(e.target.value);
  }
  
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} onChange={handleChange} placeholder = "Add a new todo"/>
        <button type="submit">Add Todo</button>
      </form>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      
    </div>
  )
}

export default TodoList