import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageHeader = styled.div`
    font-size: 250%;
    text-align: center;
    background-color: #2D2D2A;
    color: white;
    border-radius: 0px 0px 5px 5px;
    margin-bottom: 20px;
`

const SearchStyle = styled.div`
    input {
        width: 45vw;
        margin: 10px;
        border-radius: 2px;
        padding: 5px;
        border: none;
    }
`

class MovieSearch extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            search: ''
        }
    }

    _searchMovie = async (e) => {
        e.preventDefault();
        const search = this.state.search
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}`
        try {
            const res = await axios.get(url, 
              { transformRequest: [(data, headers) => {
                delete headers['access-token']
                delete headers['uid']
                delete headers['client']
                delete headers['expiry']
                delete headers['token-type']
                delete headers.common
                return data;
              }]
            });
            await this.setState({movies: res.data.results})
        } catch (err) {
            console.log(err);
        }
    }

    _addMovie = (movie) => {
        const id = this.props.match.params.id
        const payload ={
            genres: movie.genres,
            homepage: movie.homepage, 
            movie_id: movie.id, 
            original_title: movie.original_title, 
            overview: movie.overview, 
            poster_path: movie.poster_path, 
            release_date: movie.release_date, 
            runtime: movie.runtime, 
            tagline: movie.tagline, 
            video: movie.video, 
            vote_average: movie.vote_average
        }
        try {
            const res = axios.post(`/api/movie_lists/${id}/movies`, payload)
        } catch (err) {
            console.log(err);
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state}
        newState[e.target.name] = e.target.value
        this.setState(newState)
    }

    render() {
        const id = this.props.match.params.id
        return (
            <div className="container">
                <PageHeader className="row justify-content-center">
                    Search for Movie
                </PageHeader>

                <div>
                    <Link to={`/movie_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>

                <SearchStyle className="row justify-content-center">
                    <form>
                        <div>
                            <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                            <button onClick={this._searchMovie} className="default-button">Submit</button>
                        </div>   
                    </form>
                </SearchStyle>

                <h1>Movies:</h1>
                <div className="row justify-content-center">
                    {this.state.movies.map( (movie) => {
                    return (
                        <div key={movie.id}>
                            <MovieCard movie={movie} />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <button onClick={() => this._addMovie(movie)} className="default-button">Add Movie to List</button>
                            </div>
                        </div>
                    )
                    })}
                </div>

                <div className="row justify-content-center">
                    <Link to={`/movie_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>
            </div>
        );
    }
}

export default MovieSearch;

