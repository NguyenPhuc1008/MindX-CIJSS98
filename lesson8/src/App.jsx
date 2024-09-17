import { useEffect, useState } from "react"

function App() {

    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const [doer, setDoer] = useState('')
    const [name, setName] = useState('')
    const [idTodo, setIdTodo] = useState('')

    const handleGetTodos = async () => {
        try {
            setIsLoading(true)
            const response = await fetch('https://66cdd9708ca9aa6c8ccbe2cc.mockapi.io/todos')
            const jsonReponse = await response.json()
            setTodos(jsonReponse)
            setIsLoading(false)
            ResetForm()
        } catch (err) {
            console.log(err)
        }
    }
    // goi handleGetTodos de lay danh sach sau khi components render
    useEffect(() => {
        handleGetTodos()
    }, [])

    const handlePostTodo = async () => {
        try {
            setIsLoading(true)

            await fetch('https://66cdd9708ca9aa6c8ccbe2cc.mockapi.io/todos', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    isCompleted: false,
                    id: idTodo,
                    name: name,
                    doer: doer
                })
            })
            handleGetTodos()
            setIsLoading(false)
            ResetForm()
        } catch (err) {
            console.log(err)
        }
    }
    const handlePutTodo = async (id) => {
        const res = await fetch(`https://66cdd9708ca9aa6c8ccbe2cc.mockapi.io/todos/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    isCompleted: false,
                    name: name,
                    doer: doer
                }
            )
        })
        if (!res.ok) {
            throw new Error('Fail')
        }

        handleGetTodos()
        setIsLoading(false)
        ResetForm()
    }


    const handleDeleteTodo = async (id) => {
        setIsLoading(true)
        const res = await fetch(`https://66cdd9708ca9aa6c8ccbe2cc.mockapi.io/todos/${id}`, {
            method: 'DELETE',
        })
        if (!res.ok) {
            throw new Error('Fail')
        }

        handleGetTodos()
        setIsLoading(false)
        ResetForm()
    }
    const ResetForm = () => {
        setDoer('');
        setName('');
        setIdTodo('')

    }
    const checkIfTodoExists = (id) => {
        const todo = todos.find((todo) => todo.id === id);
        if (todo) {
            setName(todo.name);
            setDoer(todo.doer);
        } else {
            ResetForm()
        }
    };

    return (
        <div>
            <div>error: {error}</div>
            <div>isLoading: {isLoading.toString()}</div>
            <div>List todo:</div>
            <button onClick={handleGetTodos}>Refresh</button>
            {/* My list todo */}
            <div>{

                isLoading ? <p>Loading...</p> :
                    todos.map(todo => <div
                        key={todo.id}
                        style={{
                            display: 'flex'
                        }}
                    >
                        <p>id:{todo.id}</p>
                        <p>name:{todo.name}</p>
                        <p>doer:{todo.doer}</p>
                        <button onClick={() => handleDeleteTodo(todo.id)}>Xoa</button>
                        <button onClick={() => {
                            setIdTodo(todo.id)
                            setName(todo.name)
                            setDoer(todo.doer)

                        }}>Sua</button>
                    </div>)
            }</div>
            {/* FORM CREATE TODO */}
            <hr />
            <div>
                <input placeholder="Nhap id" value={idTodo} onChange={(e) => {
                    const newId = e.target.value;
                    setIdTodo(newId);
                    checkIfTodoExists(newId)
                }}
                    disabled={!idTodo}
                />
                <input placeholder="Nhap name" value={name} onChange={e => setName(e.target.value)} />
                <input placeholder="Nhap doer" value={doer} onChange={e => setDoer(e.target.value)} />

                <button onClick={() => (idTodo ?
                    handlePutTodo(idTodo) : handlePostTodo()
                )}>
                    {idTodo ? "Cap nhap" : "Xac nhan tao"}
                </button>
            </div>
        </div>
    )
}

export default App