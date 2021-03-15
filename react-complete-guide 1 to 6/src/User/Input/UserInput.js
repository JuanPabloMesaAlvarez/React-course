import { React } from "react";

const UserInput = (props) => {

    return(
        <div>
            <input type="text" defaultValue={props.value} onChange={props.nameChanged}></input>
        </div>
    );
}

export default UserInput;