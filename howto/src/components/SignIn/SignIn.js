import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import Axios from 'axios';
import * as Yup from 'yup';

import './signin.scss';

const SignIn = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  // console.log(user);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [user, status]);

  return (
    <div className='loginForm'>
      <h1>Log In</h1>
      <Form>
        <label className='inputLabels' htmlFor='username'>
          <b>Username/Email:</b>
          <Field
            className='inputFields'
            component='input'
            type='text'
            name='username'
            placeholder='User Name'
          />
          {touched.username && errors.username && <p>{errors.username}</p>}
        </label>
        <br />
        <label className='inputLabels' htmlFor='password'>
          <b>Password:</b>
          <Field
            className='inputFields'
            component='input'
            type='password'
            name='password'
            placeholder='Password'
          />
          {touched.password && errors.password && <p>{errors.password}</p>}
        </label>
        <br />
        <div className='buttons'>
          <button type='submit'>Log In</button>
        </div>
      </Form>

      {user.map(users => (
        <p key={users.id}>{users.FirstName} You have successfully logged in.</p>
      ))}
    </div>
  );
};

const FormikSignIn = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  }),

  componentDidMount(){
    handleSubmit(values, { props, setStatus }) {
      console.log('Form submited', values);
      Axios.post('https://bw-how-to.herokuapp.com/login', values)
        .then(res => {
          // console.log(res);
          if (res.status === 200) {
            props.history.push(`/homepage`);
            setStatus(res.data);
          }
  
          // resetForm();
        })
        .catch(err => console.error('Error', err.response));
    }
  }

})(SignIn);

export default FormikSignIn;
