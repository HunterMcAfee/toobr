import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const Nav = styled.div`
  width: 95%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2.5%;
  background-color: rgba(27, 38, 79, 1);
  a {
    text-decoration: none;
    margin: 0 5px;
    &:visited {
      color: white;
    }
  }
`;

const User = styled.span`
  color: white;
`;

const Site = styled.div`
  font-size: 250%;
  color: white;
`;

const Button = styled.button`
  background-color: rgba(27, 38, 79, 1);
  font-size: 85%;
  border: 1.5px solid white;
  border-radius: 5px;
  padding: 6px;
  color: white;
  :hover {
    background-color: rgba(87, 108, 168, 1);
  }
`
class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loggedIn: false
    };
  }

  componentWillMount() {
    this._isLoggedIn();
  }
  componentWillReceiveProps() {
    this._isLoggedIn();
  }

  _isLoggedIn = async () => {
    const response = await axios.get("/auth/validate_token");
    this.setState({
      user: response.data.data,
      loggedIn: response.data.success
    });
  };
  
  _logOut = async () => {
    console.log("CLICK");
    const response = await axios.delete("/auth/sign_out");
    //Forces refresh of browser
    window.location.reload();
  };

  render() {
    if (this.state.loggedIn) {
      return (
        <Nav>
          <Link to="/">
            <Site>toobr</Site>
          </Link>
          <div>
            <User>Signed In As: {this.state.user.email}</User>
            <a href="#" onClick={this._logOut}><Button>Log Out</Button></a>
          </div>
        </Nav>
      );
    }
    return (
      <Nav>
        <Link to="/">
          <Site>toobr</Site>
        </Link>
        <div>
          <Link to="/signup"><Button>Sign Up</Button></Link>
          <Link to="/signin"><Button>Log In</Button></Link>
        </div>
      </Nav>
    );
  }
}

export default NavBar;