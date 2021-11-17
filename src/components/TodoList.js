import TodoListItem from "./TodoListItem";

const TodoList = () => {

    const state = [{id: 1, name: "run", deadline:"01/12/2021"}, 
                   {id: 2, name: "swim", deadline:"02/12/2021"}];

    return (
        state.map((item) => (
        <TodoListItem name={item.name} deadline={item.deadline} />
            )
        )
    )
}

export default TodoList;