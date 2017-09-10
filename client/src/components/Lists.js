import React, { Component } from 'react';
import axios from 'axios';
import MovieListCard from './MovieListCard';
import { Link } from 'react-router-dom';

class Lists extends Component {
    constructor() {
        super();
        this.state = {
            movie_lists: []
        }
    }
    componentWillMount() {
        this._fetchMovieLists()
    }

    _fetchMovieLists = async () => {
        try {
            const res = await axios.get(`/api/movie_lists`);
            await this.setState({movie_lists: res.data});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }
    
    render() {
        return (
            <div>
                <h1>Your Lists</h1>
                <Link to={`/newMovieList`}><button>New Movie List</button></Link>
                {this.state.movie_lists.map( (movie_list) => {
                    return (
                        <MovieListCard key={movie_list.id} movie_list={movie_list} />
                    )
                })}
            </div>
        );
    }
}

export default Lists;