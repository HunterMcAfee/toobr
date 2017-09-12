import React, { Component } from 'react';
import axios from 'axios';
import ShowCard from './ShowCard';
import { Link } from 'react-router-dom';

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

    _deleteShowList = (e) => {
        e.preventDefault();
        const id = this.props.match.params.id
        try {
            const res = axios.delete(`/api/show_lists/${id}`);
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
                <Link to={`/show_lists/${id}/edit`}><button>Edit</button></Link>
                <h1>{this.state.show_list.title}</h1>
                <h3>Category: {this.state.show_list.category}</h3>
                <p>Description: {this.state.show_list.description}</p>
                <Link to={`/show_lists/${id}/search`}><button>Add Show by Search</button></Link>
                <br /><br />
                {this.state.shows.map( (show) => {
                    return (
                        <div key={show.id}>
                        <ShowCard key={show.id} show={show} />
                        <Link to={`/show_lists/${id}/shows/${show.id}`}><button>View Show</button></Link>
                        <br /> <br />
                        </div>
                    )
                })}
                <br />
                <button onClick={this._deleteShowList}>Delete List</button>
                <br /><br />
                <Link to={`/`}><button>Back</button></Link>
            </div>
        );
    }
}

export default MovieList;