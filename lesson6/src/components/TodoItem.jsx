
const TodoItem = (props) => {
    return (
        <div>
            {props.todo.doer}: {props.todo.todo}
        </div>
    )
}
export default TodoItem