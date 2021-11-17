const TodoListItem = (props) => {
    
    return (
    <>
    <h1>{props.name}</h1>
    <h2>{props.deadline}</h2>
    </>
    )
}

export default TodoListItem;