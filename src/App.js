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

  const handleToggle = (id) => {

    setTodos(
      produce(todos, (draft) => {
        let don = draft.find(tod => tod.id === id)
        don.done = !don.done;
      })
    )
  }

  const handleAdd = () => {

    setTodos(
      produce(todos, (draft) => {
        draft.push({
          id: "Next",
          title: "Try Next",
          done: true
        })
      })
    )

  }

  return (
    <div className="App">
      <h1>Practice immer js</h1>
      {/* {

        todos?.map((todo, index) => (
          <ul key={index}>
            <li> {todo.title} </li>
            <li> {todo?.done ? "Task is done" : "Task is not done"}</li>
          </ul>
        ))

      }
      {
        console.log('ok')
      }
      <button onClick={() => handleToggle("React")}>Toggle</button>
      <button onClick={handleAdd}>AddData</button> */}
      {/* <Person /> */}
      <Todos />
    </div>
  );
}

export default App
