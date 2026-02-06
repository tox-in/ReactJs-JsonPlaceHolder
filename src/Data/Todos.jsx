import React, { useEffect, useState } from 'react'
import { fetchTodos } from '../Services/api';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodos().then(setTodos).finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading todos...</p>

  return (
    <div className='todo-grid'>
      {todos.map((todo) => (
        <div key={todo.id} className="todo-card">
          <h3>{todo.title}</h3>
          <h3>{todo.completed ? "Completed" : "Pending"}</h3>
        </div>
      ))}
    </div>
  )
}

export default Todos