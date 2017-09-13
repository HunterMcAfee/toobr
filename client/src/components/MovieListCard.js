import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieListCard = (props) => {
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

export default MovieListCard;