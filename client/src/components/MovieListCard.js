import React from 'react';
import { Link } from 'react-router-dom';

const ListCard = (props) => {
    const movie_list = props.movie_list
    return (
        <div>
            <Link to={`/movie_lists/${movie_list.id}`}>
            <h3>{movie_list.title}</h3>
            <p>{movie_list.description}</p>
            </Link>
        </div>
    );
};

export default ListCard;