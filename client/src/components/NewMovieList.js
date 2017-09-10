import React, { Component } from 'react';
import axios from 'axios';

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
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input onChange={this._handleChange} type="text" name="category" value={this.state.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Descripton: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.description} />
                    </div>
                    <button onClick={this._newMovieList}>Submit</button>
                </form>
            </div>
        );
    }
}

export default NewMovieList;