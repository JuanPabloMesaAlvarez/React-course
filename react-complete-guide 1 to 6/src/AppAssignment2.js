import { React, Component } from 'react';
import Validation from './Validation/ValidationComponent';
import Char from './Char/Char';

class AppAssignment2 extends Component {

    state = {
        word: [],
        length: 0
    };

    inputChangedHandler = (event) => {

        let word = [...this.state.word];
        word = event.target.value.split('');

        this.setState({ 
            word: word,
            length: event.target.value.length 
        });
    }

    deleteCharHandler = (charIndex) =>{
        const chars = [...this.state.word];
        chars.splice(charIndex,1);
        this.setState({
            word: chars,
            length: chars.length
        })
    }

    render() {

        let chars = null;
        if (this.state.word.length > 0) {
            chars = (
                <div>
                    {
                        this.state.word.map((char, index) => {
                            return <Char key={index} value={char} click={() => {this.deleteCharHandler(index)}} />
                        })
                    }
                </div>
            );
        }

        return (
            <div className="App">
                <input onChange={this.inputChangedHandler}></input>
                <Validation length={this.state.length} minLength="5" maxLength="10" />
                {chars}
            </div>
        );
    }
}

export default AppAssignment2;