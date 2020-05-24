import React from 'react';
import Button from './Button';

const AddItemButton = (props) => {
    return(
        <Button className="done tooltip" onClick={props.onClick}>
            <i className="fas fa-check-circle" />
            <span className="tooltiptext">Concluir</span>
        </Button>
    )
}

export default AddItemButton;
