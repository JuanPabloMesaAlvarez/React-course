import { React, Component } from "react";
import logo from './logo.svg';
import classes from './App.module.css';
import Person from './Person/Person';

class AppCssModule extends Component {

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

  deleteapaersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); OR 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
    
    let btnClasses = [classes.Button]
    const assignedClasses = [];

    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red)
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold)
    }

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => { this.deleteapaersonHandler(index) }}
                changed={(event) => { this.nameChangedHandler(event, person.id) }}
              />
            })
          }
        </div>
      );

      btnClasses.push(classes.Red)

    }

    return (
        <div className={classes.App}>
          <p className={assignedClasses.join(' ')}>It's working css module</p>
          <button className={btnClasses.join(' ')} onClick={this.tooglePersonsHandler}>Toogle persons</button>
          {persons}
        </div>
    );
  }
}

export default AppCssModule;
