import React from 'react'
import { fetchTodos } from '../Services/api';
import useFetch from './../Hooks/useFetch';

const Todos = () => {
  const {data: todos, loading, error} = useFetch(fetchTodos);


  if (loading) return <p>Loading todos...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
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