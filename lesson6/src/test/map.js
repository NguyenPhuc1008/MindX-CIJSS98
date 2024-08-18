const todos = [{
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
},]
const mapTodos = todos.map(todo => {
    return {
        ...todo, render: `<div>${todo.doer}: ${todo.todo}</div>`
    }
})
console.log(mapTodos)