import React from 'react';

const TodoListItem = (props) => {
    return(
        <li>
            <p>{props.item}</p>
            <div>
                <button className="done tooltip" onClick={() => {props.handleDone(props.itemIndex)}}><i className="fas fa-check-circle"></i><span className="tooltiptext">Concluir</span></button>
                <button className="delete tooltip" onClick={() => {props.handleRemove(props.itemIndex)}}><i className="far fa-trash-alt"></i><span className="tooltiptext">Apagar</span></button>
            </div>
        </li>
    );
}

export default TodoListItem