import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditMovieList extends Component {
    constructor() {
        super();
        this.state = {
            movie_list: {
                title: '',
                category: '',
                description: ''
            }
        }
    }

    componentWillMount() {
        this._fetchMovieList()
    }
    
    _fetchMovieList = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/movie_lists/${id}`);
            await this.setState({movie_list: res.data.movie_list});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.movie_list}
        newState[e.target.name] = e.target.value
        this.setState({movie_list: newState})
    }

    _editMovieList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.movie_list
        try {
            const res = axios.patch(`/api/movie_lists/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.movie_list.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.movie_list.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input onChange={this._handleChange} type="text" name="category" value={this.state.movie_list.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.movie_list.description} />
                    </div>
                    <button onClick={this._editMovieList}>Submit</button>
                </form>
                <br />
                <Link to={`/movie_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default EditMovieList;