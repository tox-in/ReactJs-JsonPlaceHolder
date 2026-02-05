import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="flex justify-center items-center h-screen">
          <h1 className="text-3xl font-bold underline text-blue-600">
            Hello World!
          </h1>
        </div>
      </div>
    </>
  )
}

export default App
