import React from 'react';

const PrinciplesCard = (props) => {
    return (
        <div className={props.container}>
            <h3>
                {props.header}
            </h3>
            <p>{props.content}</p>
            
        </div>
    );
};

export default PrinciplesCard;