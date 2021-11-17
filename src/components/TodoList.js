const TodoList = () => {

    const state = [{id: 1, name: "run", deadline:"01/12/2021"}, 
                   {id: 2, name: "swim", deadline:"02/12/2021"}];

    return (
        state.map((item) => (
        <>
        <h1>{item.name}</h1>
        <h2>{item.deadline}</h2>
        </>
            )
        )
    )
}

export default TodoList;