import React from 'react';
//import Button from '@material-ui/core/Button';

const Button = (props) => {
    return(
        <button type="submit" disabled={props.disabled}>{props.textButton}</button>
    )
}

export default Button;
