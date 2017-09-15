import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FormStyles = styled.div`
    margin-top: 20px;
    label {
        font-size: 150%;
    }
    input {
        width: 65vw;
        margin-bottom: 10px;
    }
    textarea {
        width: 65vw;
        margin-bottom: 10px;
    }
`
const TitleStyle = styled.div`
    font-size: 250%;
    margin-top: 20px;
`

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

    _deleteMovieList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        try {
            const res = axios.delete(`/api/movie_lists/${id}`);
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.movie_list.id
        return (
            <div>
                <TitleStyle className="row justify-content-center">
                    Edit Movie List
                </TitleStyle>

                <div className="row justify-content-center">
                <FormStyles>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <br />
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.movie_list.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <br />
                        <input onChange={this._handleChange} type="text" name="category" value={this.state.movie_list.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea onChange={this._handleChange} type="text" name="description" value={this.state.movie_list.description} />
                    </div>
                    <button onClick={this._editMovieList} className="default-button">Submit</button>
                </form>
                </FormStyles>
                </div>
                <br />

                <div className="row justify-content-center">
                    <button onClick={this._deleteMovieList} className="default-button" style={{marginBottom: "20px"}}>Delete List</button>
                </div>
                
                <div className="row justify-content-center">
                    <Link to={`/movie_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>

            </div>
        );
    }
}

export default EditMovieList;