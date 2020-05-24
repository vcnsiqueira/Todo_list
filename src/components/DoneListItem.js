import React from 'react';
import DeleteItemButton from './DeleteItemButton';

const DoneListItem = (props) => {
    return(
        <li>
            <p>{props.item}</p>
            <div>
                <DeleteItemButton onClick={() => {props.handleRemoveDone(props.itemIndex)}} />
            </div>
        </li>
    );
}

export default DoneListItem;
