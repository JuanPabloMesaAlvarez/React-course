import React from 'react';

const validation = (props) => {

    let outPut = null;
    if (props.length < props.minLength) {
        outPut = (
            <p>Text is too short</p>
        );
    }
    else if(props.length > props.maxLength){
        outPut = (
            <p>Text long enough</p>
        );
    }

    return (
        <div>
            <p>the input length is {props.length}</p>
            {outPut}
        </div>
    );
}

export default validation;
