import React, { Component } from 'react';
import axios from 'axios';
import MovieListCard from './MovieListCard';
import ShowListCard from './ShowListCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ListHeader = styled.div`
    font-size: 250%;
    text-align: center;
    background-color: #2D2D2A;
    color: white;
    margin-bottom: 20px;
`

const ListTitle = styled.div`
    background-color: #404E5C;
    color: white;
    font-size: 200%;
    border-radius: 5px;
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

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                    <ListTitle>Movie Lists</ListTitle>
                    <Link to={`/newMovieList`}><button className="default-button" style={{marginBottom: "15px"}}>New Movie List</button></Link>
                    {this.state.movie_lists.map( (movie_list) => {
                        return (
                            <div className="flex-item">
                                <MovieListCard key={movie_list.id} movie_list={movie_list} />
                            </div>
                        )
                    })}
                    </div>
                
                    <div className="col text-center">
                    <ListTitle>TV Show Lists</ListTitle>
                    <Link to={`/newShowList`}><button className="default-button" style={{marginBottom: "15px"}}>New Show List</button></Link>
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

            </div>
        );
    }
}

export default Lists;