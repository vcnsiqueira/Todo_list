import React from 'react';

import DoneTitle from './DoneTitle';
import DoneListItem from './DoneListItem';

const DoneList = (props) => {
    if (props.doneList.length !== 0) {
        return (
            <div className="donelist">
                <DoneTitle doneTitle={'Tarefas Prontas'} />
                <ul>
                    {props.doneList.map((element, index) => {
                        return(
                            <DoneListItem
                                key={index}
                                item={element}
                                handleRemoveDone={props.handleRemoveDone}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    } else {
        return null;
    }
};

export default DoneList;
