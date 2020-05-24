import React from 'react';

import Input from './Input';
import Button from './Button';

const TodoForm = React.forwardRef((props, ref) => {
    return(
        <form className="todoInput" onSubmit={props.onSubmit}>
            <Input ref={ref} className="input" onChange={props.onChange} value={props.value}/>
            <Button className="submit" type="submit" disabled={props.value.length === 0}>
                Adicionar
            </Button>
        </form>
    );
})

export default TodoForm;
