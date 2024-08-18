import { useState } from 'react';
import "./index.css";
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = useState([{
    doer: 'Peter',
    todo: 'Do homework'
  },
  {
    doer: 'Alice',
    todo: 'Do housechores'
  }, {
    doer: 'Bob',
    todo: 'Go to work',
    // render: `<div>{doer}: {todo}</div>`
  },]);
  return (

    <div>
      <TodoList todos={todos}></TodoList>
    </div>
  )



}
export default App;