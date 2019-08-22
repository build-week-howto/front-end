import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import Axios from 'axios';
import * as Yup from 'yup';

const SignIn = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  // console.log(user);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [user, status]);

  return (
    <div className='user-form'>
      <h1>Log In</h1>
      <Form>
        <Field
          component='input'
          type='text'
          name='username'
          placeholder='User Name'
        />
        {touched.username && errors.username && <p>{errors.username}</p>}
        <Field
          component='input'
          type='password'
          name='password'
          placeholder='Password'
        />
        {touched.password && errors.password && <p>{errors.password}</p>}

        <button type='submit'>Log In</button>
      </Form>

      {user.map(users => (
        <p key={users.id}>
          {users.FirstName} You have sucessfully signed up, please check{' '}
          {users.email} for a verification email.
        </p>
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

  handleSubmit(values, { setStatus, resetForm }) {
    console.log('Form submited', values);
    Axios.post('https://bw-how-to.herokuapp.com/login', values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error('Error', err.response));
  }
})(SignIn);

export default FormikSignIn;
