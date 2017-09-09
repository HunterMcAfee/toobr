import React from 'react';

const MovieCard = (props) => {
    const movie = props.movie
    return (
        <div>
            <div>{movie.original_title}</div>
            <div>{movie.overview}</div>
            <br />
        </div>
    );
};

export default MovieCard;