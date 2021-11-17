import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Route path="/" exact>
        <TodoList/>
      </Route>
      <Route path="/welcome">
        <div>Welcome</div>
      </Route>      
    </div>
  );
}

export default App;
