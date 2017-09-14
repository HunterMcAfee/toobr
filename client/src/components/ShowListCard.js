import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowListCardStyles = styled.div`
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

const ShowListCard = (props) => {
    const show_list = props.show_list
    return (
        <ShowListCardStyles>
            <Link to={`/show_lists/${show_list.id}`}>
            <h3>{show_list.title}</h3>
            <p>Description: {show_list.description}</p>
            </Link>
        </ShowListCardStyles>
    );
};

export default ShowListCard;