import React from 'react';
import AddItemButton from './AddItemButton';
import DeleteItemButton from './DeleteItemButton';

const TodoListItem = (props) => {
    return(
        <li>
            <p>{props.item}</p>
            <div>
                <AddItemButton onClick={() => {props.handleDone(props.itemIndex)}} />
                <DeleteItemButton onClick={() => {props.handleRemove(props.itemIndex)}} />
            </div>
        </li>
    );
}

export default TodoListItem
