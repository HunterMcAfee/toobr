import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { setAxiosHeaders } from '../util';
import styled from 'styled-components';

const FormStyles = styled.div`
margin-top: 20px;
label {
    font-size: 150%;
}
input {
    width: 65vw;
    margin-bottom: 20px;
}

`
const TitleStyle = styled.div`
font-size: 250%;
margin-top: 20px;
`

class SignUp extends Component {
 constructor(){
   super();
   this.state = {
       email: '',
       password: '',
       redirect: false,
       errors: []
   }
 }

_signIn = async (e) => {
  e.preventDefault();
  const payload = {
    email: this.state.email,
    password: this.state.password,
  }
  try {
  const response = await axios.post('/auth/sign_in', payload);
  setAxiosHeaders(response.headers);
  this.setState({redirect: true})
  }
  catch (res) {
    this.setState({errors: res.response.data.errors})
  }
}

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/lists" />
   }
   return (
      <div>
      <div>
        {this.state.errors.map( (error) => {
          return (
            <h1 style={{textAlign: "center", color: "red", marginTop: "10px"}}>{error}</h1>
            )
        })}
      </div>

      <div>
      <TitleStyle className="row justify-content-center">
                  Sign In
      </TitleStyle>

      <div className="row justify-content-center">
        <FormStyles>
          <form onSubmit={this._signIn}>
            <div>
              <label htmlFor="email">E-mail: </label>
              <br />
              <input onChange={this._handleChange} type="text" name="email" value={this.state.email} />
            </div>

            <div>
              <label htmlFor="password">Password: </label>
              <br />
              <input onChange={this._handleChange} type="password" name="password" value={this.state.password} />
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button className="default-button">Sign In</button>
              <Link to="/signup"><button className="default-button">Sign Up</button></Link>
            </div>

          </form>
        </FormStyles>
      </div>
    </div>
    </div>
   );
 }
}

export default SignUp;