import './App.css';
import { Route } from 'react-router';
import TodoList from './components/TodoList';
import NewTodoListItem from "./components/NewTodoListItem";
import {useEffect, useState} from 'react';


function App() {
  
  const [items, setItems] = useState([{id: 1, name: "run", deadline:"01/12/2021"}, 
  {id: 2, name: "swim", deadline:"02/12/2021"}]);


  const addItem = (item) => {    
    setItems(previousItems => [...previousItems, item])
  };

  const fetchItems = (event) => {
    event.preventDefault()
    fetch('https://cat-todo-list.herokuapp.com/todos').then(res => res.json())
    .then(json => json.map((item) => setItems(previousItems => [...previousItems, createItemFromJson(item)])))
  }

  const createItemFromJson = (item) => {
    const newItem = {
        id: item.id,
        name: item.content,
        deadline: defaultDeadline
    }
    return newItem;
}

const defaultDeadline = "01/01/2022"

  useEffect(() => {
    fetch('https://cat-todo-list.herokuapp.com/todos').then(res => res.json())    
    .then(json => json.map((item) => setItems(previousItems => [...previousItems, createItemFromJson(item)])))
}, [])

  return (
    <div className="App">
      <form>
            <button type="submit" onClick={fetchItems}>
                Fetch
            </button>
      </form>
      <Route path="/" exact>
        <NewTodoListItem addItem={addItem}/>
        <TodoList items={items}/>
      </Route>
      <Route path="/welcome">
        <div>Welcome</div>
      </Route>      
    </div>
  );
}

export default App;
