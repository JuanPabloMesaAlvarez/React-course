import { React, Component } from "react";
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

  state = {
    persons: [
      { id: "iden1", name: 'Juan now', age: '33' },
      { id: "iden2", name: 'Juan 10 years back', age: '23' },
      { id: "iden3", name: 'Juan 10 years ahead', age: '43' }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  tooglePersonsHandler = () => {
    const doesShow = !this.state.showPersons;
    this.setState({
      showPersons: doesShow
    });
  }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler} />
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.tooglePersonsHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
