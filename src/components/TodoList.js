import React from 'react';

import TodoListItem from './TodoListItem';
import ListTitle from './ListTitle';

const TodoList = (props) => {
    // Se a lista está vazia não exibe nada
    if (props.list.length === 0) {
        return null;
    }

    return(
        <div className="todolist">
            {props.children && (<ListTitle>{props.children}</ListTitle>)}
            <ul>
                {props.list.map((element, index) => {
                    return(
                        <TodoListItem
                            key={index}
                            item={element}
                            handleRemove={props.handleRemove}
                            handleDone={props.handleDone}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

export default TodoList
