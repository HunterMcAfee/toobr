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
            const url = `https://api.themoviedb.org/3/movie/${this.state.movieDB.movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
            await this.setState({movie: res.data}) 
        } catch (err) {
            console.log(err);
        }
    }

    _deleteMovie = (e) => {
        e.preventDefault();
        const id = this.props.match.params.movie_list_id
        try {
            const res = axios.delete(`/api/movie_lists/${id}/movies/${this.state.movieDB.id}`);
            return res;
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.props.match.params.movie_list_id
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w1000${this.state.movie.poster_path}`} />
                <h2>Title: {this.state.movie.original_title}</h2>
                <div>Tagline: {this.state.movie.tagline}</div>
                <div>Overview: {this.state.movie.overview}</div>
                <div>Release Date: {this.state.movie.release_date}</div>
                <div>Budget: {this.state.movie.budget}</div>
                <div>Rating: {this.state.movie.vote_average}</div>
                <div>Home Page: {this.state.movie.homepage}</div>
                <div>Runtime: {this.state.movie.runtime}</div>
                <button onClick={this._deleteMovie}>Delete Movie</button>
                <Link to={`/movie_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default Movie;

