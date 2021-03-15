import { React, Component } from "react";
import styled from "styled-components";
import logo from './logo.svg';
import './App.css';
import PersonStyled from './Person/PersonStyled';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red': 'green'};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'lightgreen'};
    color: black;
}`;

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

  deleteapaersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); OR 
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  render() {
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
              return <PersonStyled
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

    }

    return (
        <div className="App">
          <p className={classes.join(' ')}>It's working</p>
          <StyledButton alt={this.state.showPersons} onClick={this.tooglePersonsHandler}>Toogle persons styled</StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;
