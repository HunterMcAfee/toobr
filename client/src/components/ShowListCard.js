import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ShowCardTitle = styled.div`
    background-color: #2E2E3A;
    text-decoration: none;
    font-size: 150%;
    color: white;
    border-radius: 5px 5px 0px 0px;
`

const ShowCardContent = styled.div`
    background-color: #554971;
    border-radius: 0px 0px 5px 5px;
    text-decoration: none;
    color: white;
    margin-bottom: 20px;
`

const ShowListCard = (props) => {
    const show_list = props.show_list
    return (
        <div>
            <Link to={`/show_lists/${show_list.id}`}>
                <ShowCardTitle>{show_list.title}</ShowCardTitle>
                <ShowCardContent>{show_list.description}</ShowCardContent>
            </Link>
        </div>
    );
};

export default ShowListCard;