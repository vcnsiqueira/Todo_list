import React from 'react';

const Input = React.forwardRef((props, ref) => (
    <input
        ref={ref}
        type="text"
        value={props.value}
        placeholder="Adicione um item"
        data-ls-module="charCount"
        maxLength="30"
        onChange={props.onChange}/>
));

export default Input;
