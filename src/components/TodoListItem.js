import React from 'react';
import AddItemButton from './AddItemButton';
import DeleteItemButton from './DeleteItemButton';

const TodoListItem = props => (
    <li>
        <p>{props.item.label}</p>
        <div>
            {props.onDone && (<AddItemButton onClick={() => {props.onDone(props.item)}} />)}
            <DeleteItemButton onClick={() => {props.onRemove(props.item)}} />
        </div>
    </li>
);

export default TodoListItem
