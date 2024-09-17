import { useState } from "react"
import { MdDeleteOutline } from "react-icons/md";


function App() {
  const [tasks, setTasks] = useState([]);
  const [tab, setTab] = useState('all');
  const [newTask, setNewTask] = useState('');


  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { text: newTask, active: true }]);
      setNewTask('');
    }
  };
  const toggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, active: !task.active } : task
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };
  const deleteAllCompleted = () => {
    const updatedTasks = tasks.filter((task) => task.active);
    setTasks(updatedTasks);
  };
  const filteredTasks = tasks.filter((task) => {
    if (tab === 'all') return true;
    if (tab === 'active') return task.active;
    if (tab === 'completed') return !task.active;
    return true;
  });
  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">#TODO</h1>
      <div className="flex justify-between border-b-2 border-gray-400 w-full mb-4">
        <button
          className={`px-4 py-2 ${tab === 'all' ? 'text-blue-500' : 'text-gray-500'} relative`}
          onClick={() => setTab('all')}>
          All
          {
            tab === 'all' && (<div className="absolute left-0 bottom-[-2px] w-full h-1 bg-blue-500"></div>)
          }
        </button>
        <button
          className={`px-4 py-2 ${tab === 'active' ? 'text-blue-500' : 'text-gray-500'} relative`}
          onClick={() => setTab('active')}>
          Active
          {
            tab === 'active' && (<div className="absolute left-0 bottom-[-2px] w-full h-1 bg-blue-500"></div>)
          }
        </button>
        <button
          className={`px-4 py-2 ${tab === 'completed' ? 'text-blue-500' : 'text-gray-500'} relative`}
          onClick={() => setTab('completed')}>
          Comleted
          {
            tab === 'completed' && (<div className="absolute left-0 bottom-[-2px] w-full h-1 bg-blue-500"></div>)
          }
        </button>
      </div>
      {(tab === 'all' || tab === 'active') && (
        <div className="flex mb-4">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="border p-2 flex-1"
            placeholder="Add details"
          />
          <button onClick={addTask} className="ml-2 bg-blue-500 text-white px-4 py-2">Add</button>
        </div>
      )}
      <ul className="list-none">
        {filteredTasks.map((task, index) => (
          <li key={index} className="flex items-center justify-between mb-2">
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={!task.active}
                onChange={() => toggleTask(index)}
                className="mr-2"
              />
              <span className={task.active ? '' : 'line-through'}>{task.text}</span>
            </div>
            {!task.active && tab === 'completed' && (
              <button onClick={() => deleteTask(index)} className="text-red-500"><MdDeleteOutline size={25} /></button>
            )}
          </li>
        ))}
      </ul>
      {tab === 'completed' && tasks.some((task) => !task.active) && (
        <button onClick={deleteAllCompleted} className="bg-red-500 text-white px-4 py-2 mt-4 flex justify-center gap-4">
          <p>Delete All</p>
          <MdDeleteOutline size={25} />
        </button>
      )}
    </div>
  )


}


export default App
