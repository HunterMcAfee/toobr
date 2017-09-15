import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class NewMovieList extends Component {
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

    _handleChange = (e) => {
        const newState = {...this.state.movie_list}
        newState[e.target.name] = e.target.value
        this.setState({movie_list: newState})
    }

    _newMovieList = (e) => {
        e.preventDefault();
        const payload = this.state.movie_list
        try {
            const res = axios.post(`/api/movie_lists`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
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
                        <textarea onChange={this._handleChange} type="text-area" name="description" value={this.state.movie_list.description} />
                    </div>
                    <button onClick={this._newMovieList}>Submit</button>
                </form>
                <br />
                <Link to={`/`}><button>Back</button></Link>
            </div>
        );
    }
}

export default NewMovieList;