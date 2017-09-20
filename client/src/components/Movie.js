import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import styled from 'styled-components';

class Movie extends Component {
    constructor() {
        super();
        this.state = {
            movieDB: {},
            movie: {},
            redirect: false
        }
    }

    componentWillMount() {
        this._fetchMovie();
    }

    _fetchMovie = async () => {
        const listId = this.props.match.params.movie_list_id
        const movieId = this.props.match.params.movie_id
        try {
            const res = await axios.get(`/api/movie_lists/${listId}/movies/${movieId}`)
            this.setState({movieDB: res.data})
            
        } catch (err) {
            console.log(err);
        }
        try {
            const url = `https://api.themoviedb.org/3/movie/${this.state.movieDB.movie_id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
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
            await this.setState({movie: res.data}) 
        } catch (err) {
            console.log(err);
        }
    }

    _deleteMovie = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.movie_list_id
        try {
            const res = axios.delete(`/api/movie_lists/${id}/movies/${this.state.movieDB.id}`);
            this.setState({redirect: true})
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.props.match.params.movie_list_id
        if (this.state.redirect) {
            return <Redirect to={`/movie_lists/${id}`} />
        } else {
        return (
            <div>
                <div className="container" style={{marginTop: "20px"}}>
                <div className="row justify-content-center">
                    <div className="card" style={{width: "60vw"}}>
                        <img className="card-img-top" src={`https://image.tmdb.org/t/p/w1000${this.state.movie.poster_path}`} alt="No Image Available" />
                        <div className="card-block">
                            <h4 className="card-title" style={{textAlign: "center", marginTop: "10px"}}>{this.state.movie.original_title}</h4>
                            <div className="card-text" style={{textAlign: "center"}}>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Tagline:</div>
                                <div>{this.state.movie.tagline}</div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Overview:</div>
                                <div>{this.state.movie.overview}</div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Release Date:</div>
                                <div>{this.state.movie.release_date}</div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Budget:</div>
                                <div>{this.state.movie.budget}</div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Rating:</div>
                                <div>{this.state.movie.vote_average}</div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Home Page:</div>
                                <div><a href={this.state.movie.homepage}>{this.state.movie.homepage}</a></div>
                                <div style={{fontWeight: "bold", fontSize: "125%"}}>Runtime:</div>
                                <div>{this.state.movie.runtime} min.</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <button onClick={this._deleteMovie} className="default-button" style={{marginTop: "10px", marginBottom: "10px"}}>Delete Movie</button>
                </div>

                <div className="row justify-content-center">
                <Link to={`/movie_lists/${id}`}><button className="default-button" style={{marginBottom: "10px"}}>Back</button></Link>
                </div>
                </div>
            </div>
        );
        }
    }
}

export default Movie;

