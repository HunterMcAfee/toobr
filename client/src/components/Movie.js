import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movieDB: {},
            movie: {}
        }
    }

    componentWillMount() {
        this._fetchMovie();
    }

    _fetchMovie = async () => {
        const listId = this.props.match.params.movie_list_id
        const movieId = this.props.match.params.movie_id
        try {
            const res = await axios.get(`/api/movie_lists/${listId}/movies/${movieId}`)
            this.setState({movieDB: res.data})
            
        } catch (err) {
            console.log(err);
        }
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${this.state.movieDB.movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)
            this.setState({movie: res.data})
            
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        const id = this.props.match.params.movie_list_id
        return (
            <div>
                <h2>Title: {this.state.movie.original_title}</h2>
                <div>Tagline: {this.state.movie.tagline}</div>
                <div>Overview: {this.state.movie.overview}</div>
                <div>Release Date: {this.state.movie.release_date}</div>
                <div>Budget: {this.state.movie.budget}</div>
                <div>Rating: {this.state.movie.vote_average}</div>
                <div>Home Page: {this.state.movie.homepage}</div>
                <div>Runtime: {this.state.movie.runtime}</div>
                <Link to={`/movie_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default Movie;

