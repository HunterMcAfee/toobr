import React from 'react';

const ShowCard = (props) => {
    const show = props.show
    return (
        <div>
            <div>{show.original_name}</div>
            <div>{show.overview}</div>
            <br />
        </div>
    );
};

export default ShowCard;