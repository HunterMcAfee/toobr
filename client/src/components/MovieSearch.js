import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

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

    _addMovie = (movie) => {
        const id = this.props.match.params.id
        const payload ={
            movie: movie,
            movie_list_id: id
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
            <div>
                <h1>Search for Movie</h1>
                <form>
                    <div>
                        <label htmlFor="search">Search: </label>
                        <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                    </div>
                    <button onClick={this._searchMovie}>Submit</button>
                </form>
                    <h3>Movies:</h3>
                    {this.state.movies.map( (movie) => {
                    return (
                        <div key={movie.id}>
                        <MovieCard key={movie.id} movie={movie} />
                        <button onClick={() => this._addMovie(movie)}>Add Movie to List</button>
                        </div>
                    )
                    })}
                <Link to={`/movie_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default MovieSearch;

