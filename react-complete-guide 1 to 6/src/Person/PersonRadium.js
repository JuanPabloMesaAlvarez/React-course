import { React } from "react";
import "./Person.css";
import Radium from "radium";

const personRadium = (props) => {

    const style = {
        '@media(min-width: 500px)':{
            width: '450px'
        }
    }

    return (
        <div className="Person" style={style}>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} defaultValue={props.name} />
        </div>
    );
}

export default Radium(personRadium);