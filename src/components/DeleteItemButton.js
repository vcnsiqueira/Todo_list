import React from 'react';
import Button from './Button';

const DeleteItemButton = (props) => {
    return(
        <Button className="delete tooltip" onClick={props.onClick}>
            <i className="fas fa-trash-alt" />
            <span className="tooltiptext">Apagar</span>
        </Button>
    )
}

export default DeleteItemButton;
