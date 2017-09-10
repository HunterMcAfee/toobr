import React, { Component } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

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

    _deleteMovieList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        try {
            const res = axios.delete(`/api/movie_lists/${id}`);
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
                <Link to={`/movie_lists/${id}/edit`}><button>Edit</button></Link>
                <h1>{this.state.movie_list.title}</h1>
                <h3>Category: {this.state.movie_list.category}</h3>
                <p>Description: {this.state.movie_list.description}</p>
                {this.state.movies.map( (movie) => {
                    return (
                        <MovieCard key={movie.id} movie={movie} />
                    )
                })}
                <button onClick={this._deleteMovieList}>Delete List</button>
                <br />
                <Link to={`/`}><button>Back</button></Link>
            </div>
        );
    }
}

export default MovieList;