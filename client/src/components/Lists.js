import React, { Component } from 'react';
import axios from 'axios';
import MovieListCard from './MovieListCard';
import ShowListCard from './ShowListCard';
import { Link } from 'react-router-dom';

class Lists extends Component {
    constructor() {
        super();
        this.state = {
            movie_lists: [],
            show_lists: []
        }
    }
    componentWillMount() {
        this._fetchMovieLists();
        this._fetchShowLists();
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

    _fetchShowLists = async () => {
        try {
            const res = await axios.get(`/api/show_lists`);
            await this.setState({show_lists: res.data});
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
                <h3>Movie Lists:</h3>
                <Link to={`/newMovieList`}><button>New Movie List</button></Link>
                {this.state.movie_lists.map( (movie_list) => {
                    return (
                        <MovieListCard key={movie_list.id} movie_list={movie_list} />
                    )
                })}

                <h3>Show Lists:</h3>
                <Link to={`/newShowList`}><button>New Show List</button></Link>
                {this.state.show_lists.map( (show_list) => {
                    return (
                        <ShowListCard key={show_list.id} show_list={show_list} />
                    )
                })}
            </div>
        );
    }
}

export default Lists;