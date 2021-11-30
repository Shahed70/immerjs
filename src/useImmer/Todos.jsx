import produce from 'immer'
import React, { useReducer } from 'react'

const initialState = {
    person: {
        name: "Dummy name",
        age: 30,
        done: false
    }
}

const reducer = (state, action) => {
    produce((state, action) => {
        switch (action.type) {
            case "case1":
                return state.person.name = "Arman huda";
            default:
                return state;
        }
    })


}

const Todos = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <span>The person name is: <h5>{state.person.name}</h5> </span>
            <button onClick={() => dispatch({ type: 'case1' })}>Change name</button>
        </div>
    )
}

export default Todos
