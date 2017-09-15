import React from 'react';

const ShowCard = (props) => {
    const show = props.show
    return (
        <div key={show.id} className="card" style={{width: "15rem", margin: "1.0vw"}}>
            <img className="card-img-top" src={`https://image.tmdb.org/t/p/w640${show.poster_path}`} alt="No Image Available" />
            <div className="card-body">
                <h4 className="card-title">{show.original_name}</h4>
                <p className="card-text">{ show.overview ? `${show.overview.substring(0, 120)}...` : null}</p>
            </div>
        </div>
    );
};

export default ShowCard;