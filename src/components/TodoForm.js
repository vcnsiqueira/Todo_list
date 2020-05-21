import React from 'react';

import Input from './Input';
import Button from './Button';

const TodoForm = (props) => {
    return(
        <form className="todoInput" onSubmit={props.handleButtonSubmit}>
            <Input className="input" onChange={props.handlePendingItem} value={props.pendingItem}/>
            <Button textButton={'Adicionar'}/>
        </form>
    );
}

export default TodoForm;