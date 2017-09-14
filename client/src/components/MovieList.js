import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleStyle = styled.div`
    background-color: #404E5C;
    color: white;
    font-size: 225%;
    border-radius: 5px 5px 0px 0px;
    margin-top: 10px;
    text-align: center;
`
const InformationStyle = styled.div`
    background-color: #4C4C47;
    border-radius: 0px 0px 5px 5px;
    margin-bottom: 10px;
    padding-top: 10px;
    p {
        color: white;
    }
    h3 {
        color: white
    }
`

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            movie_list: {},
            movies: []
        }
    }
    componentWillMount() {
        this._fetchMovieList()
    }

    _fetchMovieList = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/movie_lists/${id}`);
            await this.setState({movie_list: res.data.movie_list, movies: res.data.movies});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.movie_list.id
        return (
            <div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
                    <div>
                    <Link to={`/`}><button className="default-button" style={{marginLeft: "20px"}}>Back</button></Link>
                    </div>
                    <div>
                    <Link to={`/movie_lists/${id}/edit`}><button className="default-button" style={{marginRight: "20px"}}>Edit</button></Link>
                    </div>
                </div>
                
                <div className="container">
                    <TitleStyle>
                        <div className="row justify-content-center">{this.state.movie_list.title}</div>
                    </TitleStyle>
                    <InformationStyle>
                    <div className="row justify-content-center">
                        <h3>{this.state.movie_list.category}</h3>
                    </div>
                    <div className="row justify-content-center">
                        <p>{this.state.movie_list.description}</p>
                    </div>
                    </InformationStyle>
                </div>

                <div className="row justify-content-center">
                    <Link to={`/movie_lists/${id}/search`}><button className="default-button">Add Movie by Search</button></Link>
                </div>
                

                <div className="row justify-content-center">
                    {this.state.movies.map( (movie) => {
                        return (
                            <div key={movie.id}>
                            <MovieCard key={movie.id} movie={movie} />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Link to={`/movie_lists/${id}/movies/${movie.id}`}><button className="default-button">View Movie</button></Link>
                            </div>
                            </div>
                        )
                    })}
                </div>
    
            </div>
        );
    }
}

export default MovieList;