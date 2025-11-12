import React, { useEffect, useState } from 'react';

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");

  // Load todos from localStorage on mount
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodo(savedTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleClick = () => {
    if (input.trim() !== "") {
      setTodo([...todo, { text: input, completed: false }]);
      setInput('');
    }
  };

  const handleDelete = (index) => {
    setTodo(todo.filter((_, i) => i !== index));
  };

  const Design = {
    backgroundColor: 'yellow',
    maxHeight: 'fit-content',
    width: '35rem',
    display: 'grid',
    borderRadius: '0.8rem',
    justifyContent: 'center',
    justifySelf: 'center',
    alignSelf: 'center',
    padding: '0',
    margin: '0',
    justifyItems: 'center'
  };

  return (
    <div style={Design}>
      <form onSubmit={(e) => e.preventDefault()}>
        <h1>Todo Lists</h1>
        <input value={input} onChange={handleChange} type="text" placeholder='Add a todo' />
        <button onClick={handleClick} type='submit'>Add todo</button>
      </form>
      <ul>
        {todo.map((item, index) => (
          <li key={index}>
            {item.text}
            <button onClick={() => handleDelete(index)} style={{ margin: "0.5rem", cursor: 'pointer' }}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;