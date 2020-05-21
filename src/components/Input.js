import React from 'react';

const Input = (props) => {
    return(
        <input type="text" onChange={props.onChange} value={props.value} placeholder="Adicione um item" data-ls-module="charCount" maxLength="30"/>
    );
}

export default Input;