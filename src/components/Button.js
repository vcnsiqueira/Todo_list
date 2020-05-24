import React from 'react';
//import Button from '@material-ui/core/Button';

const Button = (props) => {
    return(
        <button type="submit" disabled={props.disabled}>{props.children}</button>
    )
}

export default Button;
