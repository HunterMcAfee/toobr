import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PageHeader = styled.div`
font-size: 250%;
text-align: center;
background-color: #2D2D2A;
color: white;
border-radius: 0px 0px 5px 5px;
margin-bottom: 20px;
`

const SearchStyle = styled.div`
input {
    width: 45vw;
    margin: 10px;
    border-radius: 2px;
    padding: 5px;
    border: none;
}
`
const ShowTitle = styled.div`
background-color: #404E5C;
color: white;
font-size: 200%;
margin-top: 20px;
margin-bottom: 25px;
text-align: center;
`

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
        const url = `https://api.themoviedb.org/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${search}`
        try {
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
            await this.setState({shows: res.data.results})
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
            alert(`${show.original_name} was added to your list!`);
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
                <PageHeader className="row justify-content-center">
                    Search for Show
                </PageHeader>

                <div style={{textAlign: "center", marginBottom: "20px"}}>
                    <Link to={`/show_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>

                <SearchStyle className="row justify-content-center">
                <form>
                    <div>
                        <input onChange={this._handleChange} type="text" name="search" value={this.state.search} />
                        <button onClick={this._searchShow} className="default-button">Submit</button>
                    </div>
                </form>
                </SearchStyle>

                <ShowTitle>Shows Found</ShowTitle>
                <div className="row justify-content-center">
                    {this.state.shows.map( (show) => {
                    return (
                        <div key={show.id}>
                            <ShowCard key={show.id} show={show} />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <button onClick={() => this._addShow(show)} className="default-button">Add Show to List</button>
                            </div>
                        </div>
                    )
                    })}
                </div>

                <div className="row justify-content-center">
                    <Link to={`/show_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>

            </div>    
        );
    }
}

export default ShowSearch;