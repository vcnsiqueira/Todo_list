import React from 'react';

const DoneListItem = (props) => {
    return(
        <li>
            <p>{props.item}</p>
            <div>
                <button className="delete tooltip" onClick={() => {props.handleRemoveDone(props.itemIndex)}}><i className="far fa-trash-alt"></i><span className="tooltiptext">Apagar</span></button>
            </div>
        </li>
    );
}

export default DoneListItem;