import React from 'react';

const MovieCard = (props) => {
    const movie = props.movie
    return (
        <div>
            <div>{movie.original_title}</div>
            <img src={`https://image.tmdb.org/t/p/w640${movie.poster_path}`} />
            <div>{movie.overview}</div>
            <br />
        </div>
    );
};

export default MovieCard;