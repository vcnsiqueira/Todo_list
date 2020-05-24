import React from 'react';
//import Button from '@material-ui/core/Button';

const Button = (props) => {
    return (
        <button
            className={props.className}
            type={props.type || 'button'}
            disabled={props.disabled}
            onClick={props.onClick}>
            {props.children}
        </button>
    )
}

export default Button;
