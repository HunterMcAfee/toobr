import React from 'react';

const ListCard = (props) => {
    const movie_list = props.movie_list
    return (
        <div>
            <h3>{movie_list.title}</h3>
            <p>{movie_list.description}</p>
        </div>
    );
};

export default ListCard;