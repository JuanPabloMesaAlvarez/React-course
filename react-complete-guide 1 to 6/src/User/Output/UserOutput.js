import { React } from "react";

const UserOutput = (props) => {

    return (
        <div>
            <p>
                {props.userName}
            </p>
            <p>
                {props.value}
            </p>
        </div>
    );
}

export default UserOutput;