import { useEffect, useState } from "react";

const NewTodoListItem = (props) => {

    const [name, setName] = useState('');
    const [deadline, setDeadline] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value)
    }

    const deadlineChangeHandler = (event) => {
        setDeadline(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()
        const newItem = {
            id: 5,
            name: name,
            deadline: deadline
        }        
        props.addItem(newItem)        
        setDeadline('')
        setName('')
    }

    return (
        <>
        <h1>New todo</h1>
        <form> 
            <input type="string" name="name" value={name} onChange={nameChangeHandler}/>
            <input type="date" name="deadline" value={deadline} onChange={deadlineChangeHandler}/>
            <button type="submit" onClick={submitHandler}>
                Save
            </button>
        </form>
        </>
    )
}

export default NewTodoListItem;