import './App.css';
import produce from 'immer';
import { useCallback, useState } from 'react';
import Person from './useImmer/Person';
import Todos from './useImmer/Todos';

function App() {

  const [todos, setTodos] = useState([
    {
      id: "React",
      title: "Learn React",
      done: true
    },
    {
      id: "Immer",
      title: "Try Immer",
      done: false
    }
  ]);

  const handleToggle = useCallback((id) => {
    console.log('Rendered1');
      setTodos(
          produce((draft) => {
            const todo = draft.find((tod) => tod.id = id)
            todo.done = !todo.done;
            
          })
      )
  }, []);

  const handleAdd = useCallback(() => {
    console.log('Rendered2');
    setTodos(
      produce((draft) => {
        draft.push({
          id:"Angular",
          title: "todo_" + Math.random(),
          done:true
        })
      })
    )
  }, []);

  return (
    <div className="App">
      <h1>Practice immer js</h1>
          {/* {
            todos?.map( (todo, index) => (
              <ul key={index}>
                <li> {todo.title} </li>
                <li> {todo?.done ? "Task is done":"Task is not done"}</li>
              </ul>
            ))
          }
          <button onClick={()=> handleToggle("Angular")}>Toggle</button>
          <button onClick={handleAdd}>AddData</button> */}
          {/* <Person /> */}
          <Todos />
    </div>
  );
}

export default App;
