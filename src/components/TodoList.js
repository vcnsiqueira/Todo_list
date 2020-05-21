import React from 'react';

import TodoListItem from './TodoListItem';

const TodoList = (props) => {
    return(
        <ul>
            {props.list.map((element, index) => {
                return(
                    <TodoListItem 
                        key = {index}
                        itemIndex={index}
                        item = {element}
                        handleRemove = {props.handleRemove} 
                        handleDone = {props.handleDone}
                    />
                );
            })}
        </ul>
    );
}

export default TodoList