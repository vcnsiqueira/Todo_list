import React from 'react';
import AddItemButton from './AddItemButton';
import DeleteItemButton from './DeleteItemButton';

const TodoListItem = (props) => {
    return(
        <li>
            <p>{props.item.label}</p>
            <div>
                <AddItemButton onClick={() => {props.handleDone(props.item)}} />
                <DeleteItemButton onClick={() => {props.handleRemove(props.item)}} />
            </div>
        </li>
    );
}

export default TodoListItem
