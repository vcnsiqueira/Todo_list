import React from 'react';

import Input from './Input';
import Button from './Button';

const TodoForm = React.forwardRef((props, ref) => {
    return(
        <form className="todoInput" onSubmit={props.handleButtonSubmit}>
            <Input ref={ref} className="input" onChange={props.handlePendingItem} value={props.pendingItem}/>
            <Button textButton={'Adicionar'} disabled={props.pendingItem.length === 0}/>
        </form>
    );
})

export default TodoForm;
