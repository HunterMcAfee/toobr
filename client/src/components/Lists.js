import React, { Component } from 'react';
import axios from 'axios';
import MovieListCard from './MovieListCard';
import ShowListCard from './ShowListCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
    font-size: 300%;
    font-weight: bold;
    text-align: center;
    padding-top: 2.5vh;
`

const ListTitle = styled.div`
    font-size: 200%;
    font-weight: bold;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px;
`

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
                <ListHeader>YOUR LISTS</ListHeader>
                <div className="flex-container-row">
                    <div className="flex-container-column">
                        <ListTitle>Movie Lists</ListTitle>
                        <Link to={`/newMovieList`}><button>New Movie List</button></Link>
                        {this.state.movie_lists.map( (movie_list) => {
                            return (
                                <div className="flex-item">
                                    <MovieListCard key={movie_list.id} movie_list={movie_list} />
                                </div>
                            )
                        })}
                    </div>

                    <div className="flex-container-column">
                        <ListTitle>Show Lists</ListTitle>
                        <Link to={`/newShowList`}><button>New Show List</button></Link>
                        {this.state.show_lists.map( (show_list) => {
                            return (
                                <div className="flex-item">
                                    <ShowListCard key={show_list.id} show_list={show_list} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default Lists;