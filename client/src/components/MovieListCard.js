import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieCardTitle = styled.div`
    background-color: #2E2E3A;
    text-decoration: none;
    font-size: 150%;
    color: white;
    border-radius: 5px 5px 0px 0px;
`

const MovieCardContent = styled.div`
    background-color: #554971;
    border-radius: 0px 0px 5px 5px;
    text-decoration: none;
    color: white;
    margin-bottom: 20px;
`

const MovieListCard = (props) => {
    const movie_list = props.movie_list
    return (
        <div>
            <Link to={`/movie_lists/${movie_list.id}`}>
                <MovieCardTitle>{movie_list.title}</MovieCardTitle>
                <MovieCardContent>{movie_list.description}</MovieCardContent>
            </Link>
        </div>
    );
};

export default MovieListCard;