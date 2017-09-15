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

class NewShowList extends Component {
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

    _handleChange = (e) => {
        const newState = {...this.state.show_list}
        newState[e.target.name] = e.target.value
        this.setState({show_list: newState})
    }

    _newShowList = (e) => {
        e.preventDefault();
        const payload = this.state.show_list
        try {
            const res = axios.post(`/api/show_lists`, payload)
        } catch (err) {
            console.log(err)
        }
    }

    render() {
        return (
            <div>
                <TitleStyle className="row justify-content-center">
                    Create a Show List
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
                        <textarea onChange={this._handleChange} type="text-area" name="description" value={this.state.show_list.description} />
                    </div>
                    <button onClick={this._newShowList} className="default-button">Submit</button>
                </form>
                </FormStyles>
                </div>
                <br />
                <div className="row justify-content-center">
                <Link to={`/`}><button className="default-button">Back</button></Link>
                </div>
            </div>
        );
    }
}

export default NewShowList;