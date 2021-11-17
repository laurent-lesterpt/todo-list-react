import './App.css';
import { Route } from 'react-router';
import TodoList from './components/TodoList';
import NewTodoListItem from "./components/NewTodoListItem";
import { useState } from 'react';


function App() {
  
  const [items, setItems] = useState([{id: 1, name: "run", deadline:"01/12/2021"}, 
  {id: 2, name: "swim", deadline:"02/12/2021"}]);


  const addItem = (item) => {
    setItems([...items, item])
  };

  return (
    <div className="App">
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
