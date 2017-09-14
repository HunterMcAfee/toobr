import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const TitleStyle = styled.div`
    background-color: #404E5C;
    color: white;
    font-size: 225%;
    border-radius: 5px 5px 0px 0px;
    margin-top: 10px;
    text-align: center;
`

const InformationStyle = styled.div`
    background-color: #4C4C47;
    border-radius: 0px 0px 5px 5px;
    margin-bottom: 10px;
    padding-top: 10px;
    p {
        color: white;
    }
    h3 {
        color: white
    }
`

class MovieList extends Component {
    constructor() {
        super();
        this.state = {
            show_list: {},
            shows: []
        }
    }
    componentWillMount() {
        this._fetchShowList()
    }

    _fetchShowList = async () => {
        const id = this.props.match.params.id
        try {
            const res = await axios.get(`/api/show_lists/${id}`);
            await this.setState({show_list: res.data.show_list, shows: res.data.shows});
            return res.data;
        }
        catch (err) {
            console.log(err)
        }
    }

    render() {
        const id = this.state.show_list.id
        return (
            <div>
                <div style={{display: "flex", justifyContent: "space-between", marginTop: "10px"}}>
                    <div>
                    <Link to={`/`}><button className="default-button" style={{marginLeft: "20px"}}>Back</button></Link>
                    </div>
                    <div>
                    <Link to={`/show_lists/${id}/edit`}><button className="default-button" style={{marginRight: "20px"}}>Edit</button></Link>
                    </div>
                </div>

                <div className="container">
                    <TitleStyle>
                        <div className="row justify-content-center">{this.state.show_list.title}</div>
                    </TitleStyle>
                    <InformationStyle>
                    <div className="row justify-content-center">
                        <h3>{this.state.show_list.category}</h3>
                    </div>
                    <div className="row justify-content-center">
                        <p>{this.state.show_list.description}</p>
                    </div>
                    </InformationStyle>
                </div>


                <div className="row justify-content-center">
                <Link to={`/show_lists/${id}/search`}><button className="default-button">Add Show by Search</button></Link>
                </div> 

                <div className="row justify-content-center">
                    {this.state.shows.map( (show) => {
                        return (
                            <div key={show.id}>
                            <ShowCard key={show.id} show={show} />
                            <div style={{display: "flex", justifyContent: "center"}}>
                                <Link to={`/show_lists/${id}/shows/${show.id}`}><button className="default-button">View Show</button></Link>
                            </div>
                            </div>
                        )
                    })}
                </div>
               
            </div>
        );
    }
}

export default MovieList;