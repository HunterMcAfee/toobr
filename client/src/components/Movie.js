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
        this._fetchMovieDB()
    }

    _fetchMovieDB = async () => {
        const listId = this.props.match.params.movie_list_id
        const movieId = this.props.match.params.movie_id
        try {
            const res = await axios.get(`/api/movie_lists/${listId}/movies/${movieId}`)
            this.setState({movieDB: res.data})
        } catch (err) {
            console.log(err);
        }
    }

    // _fetchMovie = async (e) => {
    //     e.preventDefault();
    //     const search = this.state.search
    //     try {
    //         const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}`)
    //         this.setState({movies: res.data.results})
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    render() {
        const id = this.props.match.params.id
        return (
            <div>
              
                <Link to={`/movie_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default Movie;

