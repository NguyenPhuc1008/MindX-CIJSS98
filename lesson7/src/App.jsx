import { useState } from 'react'
import './index.css';
import InputSection from './layout/InputSection';
import TodoSection from './layout/TodoSection.jsx';

//to do list
//name, id, isCompleted, category


function App() {

  const [todos, setTodos] = useState([])

  return (
    <div className="flex flex-col gap-4 items-center">
      <InputSection
        setTodos={setTodos}
        todos={todos} />
      <TodoSection
        setTodos={setTodos}
        todos={todos} />


    </div>
  )
}

export default App
