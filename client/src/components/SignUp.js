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
       password_confirmation: '',
       redirect: false
   }
 }

 _signUp = async (e) => {
   e.preventDefault();
   const payload = {
     email: this.state.email,
     password: this.state.password,
     password_confirmation: this.state.password_confirmation
   }
   const response = await axios.post('/auth', payload);
   setAxiosHeaders(response.headers);
   this.setState({redirect: true})
 }

 _signIn = (e) => {
   e.preventDefault();
   this.setState({redirect: true})
 }

 _handleChange = (e) => {
   const newState = {...this.state};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
 }

 render() {
   if (this.state.redirect){
     return <Redirect to="/" />
   }
   return (
    <div>
      <TitleStyle className="row justify-content-center">
                  Sign Up
      </TitleStyle>

      <div className="row justify-content-center">
        <FormStyles>
          <form onSubmit={this._signUp}>

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

            <div>
              <label htmlFor="password">Confirm Password: </label>
              <br />
              <input onChange={this._handleChange} type="password" name="password_confirmation" value={this.state.password_confirmation} />
            </div>

            <div style={{display: "flex", justifyContent: "space-between"}}>
              <button className="default-button">Sign Up</button>
              <Link to="/signin"><button className="default-button">Sign In</button></Link>
            </div>

          </form>
        </FormStyles>
      </div>
    </div>
   );
 }
}

export default SignUp;