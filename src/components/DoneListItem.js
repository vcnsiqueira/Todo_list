import React from 'react';
import DeleteItemButton from './DeleteItemButton';

const DoneListItem = (props) => {
    return(
        <li>
            <p>{props.item.label}</p>
            <div>
                <DeleteItemButton onClick={() => {props.handleRemoveDone(props.item)}} />
            </div>
        </li>
    );
}

export default DoneListItem;
