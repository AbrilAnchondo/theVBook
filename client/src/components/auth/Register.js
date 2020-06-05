import React, { useState } from 'react';
import axios from 'axios';
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

import { Form, Segment } from 'semantic-ui-react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const { name, email } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })

  const onSubmit = async e => {
    e.preventDefault();
    const newUser = {
      name,
      email
    };

    try {
      const configObj = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      const body = JSON.stringify(newUser);
      const res = await axios.post('http://localhost:5000/api/users', body, configObj);
      console.log(res.data);
      alert('Thanks for joining! Please login...');
      navigate('/login')
    }catch(err) {
      console.error("error:",err);
      console.log(err.response.data.errors[0].msg);
      alert(err.response.data.errors[0].msg);
    }
  }

  return (
    <div className='signup-wrapper'>
      <Segment inverted>
        <Form inverted onSubmit={e => onSubmit(e)}>
          <h1>Sign Up</h1>
          <Form.Group>
            <Form.Input 
              placeholder='Name'
              name='name'
              value={name}
              onChange={e => onChange(e)}
            />
            <Form.Input 
              placeholder='Email'
              name='email'
              value={email}
              onChange={e => onChange(e)}
            />
            <Form.Button content='Submit' />
          </Form.Group>
          <p>Already have an account? <Link to='/login'>Login</Link></p>
        </Form>
      </Segment>
    </div>
  )
}

export default Register