import React from 'react';
import MovieDBConstants from './constants/MovieDBContants.js';

const MovieCard = (props) => {
    const movie = props.movie
    return (
        <div key={movie.id} className="card" style={{width: "15rem", margin: "1.0vw"}}>
            <img className="card-img-top" src={`${MovieDBConstants.SMALL_POSTER_URL}${movie.poster_path}`} alt="No Image Available" />
            <div className="card-body">
                <h4 className="card-title">{movie.original_title}</h4>
                <p className="card-text">{ movie.overview ? `${movie.overview.substring(0, 120)}...` : null}</p>
            </div>
        </div>
    );
};

export default MovieCard;