import React from 'react';

const ShowCard = (props) => {
    const show = props.show
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w640${show.poster_path}`} />
            <div>{show.original_name}</div>
            <div>{show.overview}</div>
            <br />
        </div>
    );
};

export default ShowCard;