import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import { Link } from 'react-router-dom';

class ShowSearch extends Component {
    constructor() {
        super();
        this.state = {
            shows: [],
            search: ''
        }
    }

    _searchShow = async (e) => {
        e.preventDefault();
        const search = this.state.search
        try {
            const res = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}`)           
            this.setState({shows: res.data.results})
        } catch (err) {
            console.log(err);
        }
    }

    _addShow = (show) => {
        const id = this.props.match.params.id
        const payload ={
            show_id: show.id, 
            original_name: show.original_name, 
            overview: show.overview, 
            poster_path: show.poster_path, 
            backdrop_path: show.backdrop_path,
            vote_average: show.vote_average
        }
        try {
            const res = axios.post(`/api/show_lists/${id}/shows`, payload)
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
                <h1>Search for Show</h1>
                <form>
                    <div>
                        <label htmlFor="search">Search: </label>
                        <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                    </div>
                    <button onClick={this._searchShow}>Submit</button>
                </form>
                    <h3>Shows:</h3>
                    {this.state.shows.map( (show) => {
                    return (
                        <div key={show.id}>
                        <ShowCard key={show.id} show={show} />
                        <button onClick={() => this._addShow(show)}>Add Show to List</button>
                        </div>
                    )
                    })}
                <Link to={`/show_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default ShowSearch;