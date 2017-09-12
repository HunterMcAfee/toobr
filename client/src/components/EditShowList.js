import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class EditShowList extends Component {
    constructor() {
        super();
        this.state = {
            show_list: {
                title: '',
                category: '',
                description: ''
            }
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

    _editShowList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        const payload = this.state.show_list
        try {
            const res = axios.patch(`/api/show_lists/${id}`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.show_list.id
        return (
            <div>
                <form>
                    <div>
                        <label htmlFor="title">Title: </label>
                        <input onChange={this._handleChange} type="text" name="title" value={this.state.show_list.title} />
                    </div>
                    <div>
                        <label htmlFor="category">Category: </label>
                        <input onChange={this._handleChange} type="text" name="category" value={this.state.show_list.category} />
                    </div>
                    <div>
                        <label htmlFor="description">Description: </label>
                        <input onChange={this._handleChange} type="text" name="description" value={this.state.show_list.description} />
                    </div>
                    <button onClick={this._editShowList}>Submit</button>
                </form>
                <br />
                <Link to={`/show_lists/${id}`}><button>Back</button></Link>
            </div>
        );
    }
}

export default EditShowList;