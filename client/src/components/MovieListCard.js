import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MovieListCardStyles = styled.div`
    background-color: #4C4C47;
    border-radius: 5px;
    margin-top: 10px;
    a {
        text-decoration: none;
    }
    h3 {
        color: white
    }
`

const MovieListCard = (props) => {
    const movie_list = props.movie_list
    return (
        <MovieListCardStyles>
            <Link to={`/movie_lists/${movie_list.id}`}>
                <h3>{movie_list.title}</h3>
                <p>{movie_list.description}</p>
            </Link>
        </MovieListCardStyles>
    );
};

export default MovieListCard;