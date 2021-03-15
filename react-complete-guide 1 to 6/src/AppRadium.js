import { React, Component } from "react";
import logo from './logo.svg';
import './App.css';
import PersonRadium from './Person/PersonRadium';
import Radium, { StyleRoot } from "radium";

class AppRadium extends Component {

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

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red')
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <PersonRadium
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

      style.backgroundColor = 'red';
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>It's working</p>
          <button style={style} onClick={this.tooglePersonsHandler}>Toogle persons</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(AppRadium);
