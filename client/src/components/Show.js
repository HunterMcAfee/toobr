import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import MovieDBConstants from './constants/MovieDBContants.js';

class Show extends Component {
    constructor() {
        super();
        this.state = {
            showDB: {},
            show: {},
            redirect: false
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

    _deleteShow = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.show_list_id
        try {
            const res = await axios.delete(`/api/show_lists/${id}/shows/${this.state.showDB.id}`);
            this.setState({redirect: true})
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.props.match.params.show_list_id
        if (this.state.redirect) {
            return <Redirect to={`/show_lists/${id}`} />            
        } else {
        return (
            <div>
            <div className="container" style={{marginTop: "20px"}}>
            <div className="row justify-content-center">
                <div className="card" style={{width: "60vw"}}>
                    <img className="card-img-top" src={`${MovieDBConstants.LARGE_POSTER_URL}${this.state.show.poster_path}`} alt="No Image Available" />
                    <div className="card-block">
                        <h4 className="card-title" style={{textAlign: "center", marginTop: "10px"}}>{this.state.show.original_name}</h4>
                        <div className="card-text" style={{textAlign: "center"}}>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>Tagline:</div>
                            <div>{this.state.show.tagline}</div>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>Overview:</div>
                            <div>{this.state.show.overview}</div>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>First Air Date:</div>
                            <div>{this.state.show.first_air_date}</div>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>Rating:</div>
                            <div>{this.state.show.vote_average}</div>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>Home Page:</div>
                            <div><a href={this.state.show.homepage}>{this.state.show.homepage}</a></div>
                            <div style={{fontWeight: "bold", fontSize: "125%"}}>Number of Seasons:</div>
                            <div>{this.state.show.number_of_seasons}</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center">
                <button onClick={this._deleteShow} className="default-button" style={{marginTop: "10px", marginBottom: "10px"}}>Delete Show</button>
            </div>

            <div className="row justify-content-center">
            <Link to={`/show_lists/${id}`}><button className="default-button" style={{marginBottom: "10px"}}>Back</button></Link>
            </div>
            </div>
        </div>
        );
    }
    }
}

export default Show;