import React from 'react';
import { Link } from 'react-router-dom';

const ShowListCard = (props) => {
    const show_list = props.show_list
    return (
        <div>
            <Link to={`/show_lists/${show_list.id}`}>
            <h3>{show_list.title}</h3>
            <p>{show_list.description}</p>
            </Link>
        </div>
    );
};

export default ShowListCard;