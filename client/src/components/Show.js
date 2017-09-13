import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Show extends Component {
    constructor() {
        super();
        this.state = {
            showDB: {},
            show: {}
        }
    }

    componentWillMount() {
        this._fetchShow();
    }

    _fetchShow = async () => {
        const listId = this.props.match.params.show_list_id
        const showId = this.props.match.params.show_id
        try {
            const res = await axios.get(`/api/show_lists/${listId}/shows/${showId}`)
            this.setState({showDB: res.data})
            
        } catch (err) {
            console.log(err);
        }
        try {
            const url = `https://api.themoviedb.org/3/tv/${this.state.showDB.show_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
            await this.setState({show: res.data}) 
        } catch (err) {
            console.log(err);
        }
    }

    _deleteShow = (e) => {
        e.preventDefault();
        const id = this.props.match.params.show_list_id
        try {
            const res = axios.delete(`/api/show_lists/${id}/shows/${this.state.showDB.id}`);
            return res;
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.props.match.params.show_list_id
        return (
            <div>
                <img src={`https://image.tmdb.org/t/p/w1000${this.state.show.poster_path}`} />
                <h2>Title: {this.state.show.original_name}</h2>
                <div>Tagline: {this.state.show.tagline}</div>
                <div>Overview: {this.state.show.overview}</div>
                <div>First Air Date: {this.state.show.first_air_date}</div>
                <div>Rating: {this.state.show.vote_average}</div>
                <div>Home Page: {this.state.show.homepage}</div>
                <div>Number of Seasons: {this.state.show.number_of_seasons}</div>
                <button onClick={this._deleteShow}>Delete Show</button>
                <Link to={`/show_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default Show;