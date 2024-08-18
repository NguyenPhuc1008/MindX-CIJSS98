import { useState } from 'react'
import ToDoList from "./components/ToDoList";


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>

      {/* <Accordion title="Tieu de 1"> Xin chao</Accordion> */}
      <ToDoList toDoList={[
        {
          name: 'Cong viec A',
          isCompteled: false
        },
        {
          name: 'Cong viec B',
          isCompteled: true
        }
      ]}></ToDoList>
    </div>
  )
}

export default App
