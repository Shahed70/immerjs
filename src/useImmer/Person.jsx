import React from 'react'
import { useImmer } from 'use-immer'

const Person = () => {
    const [person, setPerson] = useImmer({
        name: "Michel",
        age: 33
    })

    const updatePerson = (e) => {
        setPerson((draft) => {
            draft.name = e.target.value
        })
    }

    function becomeOlder() {
        setPerson(draft => {
          draft.age++;
        });
    }

    return (
        <div>
            <h1>
                Hello {person.name} ({person.age})
            </h1>
            <input
                onChange={updatePerson}
                value={person.name}
            />
            <br />
            <button onClick={becomeOlder}>Older</button>
        </div>
    )
}
export default Person;
