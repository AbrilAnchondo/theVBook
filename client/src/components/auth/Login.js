import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

import { Form, Segment } from 'semantic-ui-react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: ''
  });

  const { email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    const loggedInUser = {
      email
    };

    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json',
          "Accepts": "application/json"
        }
      };
      const body = JSON.stringify(loggedInUser);
      const res = await axios.post('http://localhost:5000/api/auth', body, configObj);
      console.log(res);
      localStorage.userEmail = res.data.email;
      localStorage.userId = res.data._id;
      console.log("User Id: ",localStorage.userId);
      console.log("User Email: ",localStorage.userEmail);
      navigate('/')
    }catch(err) {
      console.error("error:",err);
      console.log(err.response.data.errors[0].msg);
      alert(err.response.data.errors[0].msg);
    }
  }

  return (
    <div className='login-wrapper'>
      <Segment inverted>
        <Form inverted onSubmit={e => onSubmit(e)}>
          <h1>Login</h1>
          <Form.Group >
            <Form.Input 
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
            <Form.Button content='Submit' />
          </Form.Group>
          <p>Don't have an account yet? <Link to='/register'>Signup</Link></p>
        </Form>
      </Segment>
    </div>
  )
}

export default Login