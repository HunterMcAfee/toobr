import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';

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
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}`)
            this.setState({movies: res.data.results})
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
        return (
            <div>
                <h1>Search for Movies</h1>
                <form>
                    <div>
                        <label htmlFor="search">Search: </label>
                        <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                    </div>
                    <button onClick={this._searchMovie}>Submit</button>
                    <h3>Movies:</h3>
                    {this.state.movies.map( (movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                    })}
                </form>
            </div>
        );
    }
}

export default MovieSearch;