import React from 'react';

const ListTitle = (props) => {
    return(
        <div>
            <div className="title">{props.children}</div>
        </div>
    );
}

export default ListTitle;
