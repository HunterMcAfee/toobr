import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Button = styled.button`
    background-color: #848FA5;
    font-size: 150%;
    border: 1.5px solid #848FA5;
    border-radius: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 7px;
    padding-right: 7px;
    color: white;
    margin: 10px;
    :hover {
    background-color: white;
    color: #848FA5;
    border: 1.5px solid white;
    }
`

const TitleStyle = styled.div`
    font-size: 300%;
    background-color: #2D2D2A;
    color: white;
    margin-top: 15vh;
    margin-bottom: 30px;
`

// const HomeStyle = styled.div`
//     background-image: url('https://static.pexels.com/photos/2990/vintage-old-film.jpg');
//     height: 90vh;
//     width: 100vw;
//     background-size: cover;
//     background-position: center;
//     filter: sepia(100%);
// `

class Home extends Component {
    render() {
        return (
            <div className="container">
            <TitleStyle className="row justify-content-center" style={{borderRadius: "5px"}}>
                Welcome to toobr!
            </TitleStyle>  

            <div className="row justify-content-center">
                <Link to="/signup"><Button>Sign Up</Button></Link>
                <Link to="/signin"><Button>Log In</Button></Link>
            </div>
            </div>
        );
    }
}

export default Home;