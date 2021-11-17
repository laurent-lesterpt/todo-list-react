import TodoListItem from "./TodoListItem";

const TodoList = (props) => {
    return (
        props.items.map((item) => (
        <TodoListItem key={item.id} name={item.name} deadline={item.deadline} />
            )
        )
    )
}

export default TodoList;