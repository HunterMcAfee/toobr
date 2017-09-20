import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
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

class EditShowList extends Component {
    constructor() {
        super();
        this.state = {
            show_list: {
                title: '',
                category: '',
                description: ''
            },
            redirect: false,
            redirectDelete: false
        }
    }

    componentWillMount() {
        this._fetchShowList()
    }
    
    _fetchShowList = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/show_lists/${id}`);
            await this.setState({show_list: res.data.show_list});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    _handleChange = (e) => {
        const newState = {...this.state.show_list}
        newState[e.target.name] = e.target.value
        this.setState({show_list: newState})
    }

    _editShowList = async (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.show_list
        try {
            const res = await axios.patch(`/api/show_lists/${id}`, payload)
            this.setState({redirect: true})
        } catch (err) {
            console.log(err)
        }
    }

    _deleteShowList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        try {
            const res = axios.delete(`/api/show_lists/${id}`);
            this.setState({redirectDelete: true})
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.show_list.id
        if (this.state.redirect) {
            return <Redirect to={`/show_lists/${id}`} />
        } else if (this.state.redirectDelete) {
            return <Redirect to={`/lists`} />
        } else {
        return (
            <div>
                <TitleStyle className="row justify-content-center">
                    Edit Show List
                </TitleStyle>

                <div className="row justify-content-center">
                <FormStyles>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <br />
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.show_list.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <br />
                        <input onChange={this._handleChange} type="text" name="category" value={this.state.show_list.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <br />
                        <textarea onChange={this._handleChange} type="text" name="description" value={this.state.show_list.description} />
                    </div>
                    <button onClick={this._editShowList} className="default-button">Submit</button>
                </form>
                </FormStyles>
                </div>
                <br />

                <div className="row justify-content-center">
                    <button onClick={this._deleteShowList} className="default-button" style={{marginBottom: "20px"}}>Delete List</button>
                </div>
                
                <div className="row justify-content-center">
                    <Link to={`/show_lists/${id}`}><button className="default-button">Back</button></Link>
                </div>

            </div>
        );
    }
    }
}

export default EditShowList;