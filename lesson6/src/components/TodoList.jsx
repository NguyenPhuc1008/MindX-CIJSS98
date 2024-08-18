
import TodoItem from "./TodoItem";
const TodoList = (props) => {
    return (
        <div className="">
            {
                props.todos.map(
                    todo => <TodoItem todo={todo}></TodoItem>
                )
            }
        </div>
    )
}
export default TodoList