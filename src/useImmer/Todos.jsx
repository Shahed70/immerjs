import produce from "immer";
import React, { useReducer } from "react";

const initialState = {
  person: {
    name: "Dummy name",
    age: 30,
    done: false,
  },
};

const reducer = produce((draft, action) => {
  switch (action.type) {
    case "case1":
      let neWname = draft;
      neWname.person.name = action.value;
      return neWname;
    default:
      break;
  }
});

const Todos = () => {
  const [todo, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <span>
        The person name is: <h5>{todo.person.name}</h5>{" "}
      </span>
      <button onClick={() => dispatch({ type: "case1", value: "banglades" })}>
        Change name
      </button>
    </div>
  );
};

export default Todos;
