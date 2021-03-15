import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

const AppUsingHooks = props => {

    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Juan now', age: '33' },
            { name: 'Juan 10 years back', age: '23' },
            { name: 'Juan 10 years ahead', age: '43' }
        ],
        otherState: 'some other value'
    });

    const switchNameHandler = () => {
        setPersonsState({
          persons: [
            { name: 'Juan 2020', age: '33' },
            { name: 'Juan 10 years back', age: '23' },
            { name: 'Juan 20 years ahead', age: '53' }
          ]
        });
      }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
          </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
          </a>
            </header>
            <button onClick={switchNameHandler}>Switch names</button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>Running in mornings</Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );

};

export default AppUsingHooks;