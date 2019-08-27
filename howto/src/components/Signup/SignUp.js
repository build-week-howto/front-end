import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import * as Yup from 'yup';
import './signup.scss';

const UserForm = ({ errors, touched, values, status }) => {
  const [user, setUser] = useState([]);
  // console.log(user);

  useEffect(() => {
    if (status) {
      setUser([...user, status]);
    }
  }, [user, status]);

  return (
    <div className='signUpForm'>
      <h2>Lets Begin Shall We!</h2>
      <hr />
      <p>Please fill in this form to create an account.</p>
      <hr />
      <Form>
        <label className='inputLabels' htmlFor='username'>
          <b>Username</b>
          <Field
            className='inputFields'
            component='input'
            type='text'
            name='username'
            placeholder='User Name'
          />
          {touched.username && errors.username && (
            <p style={{ margin: '0', color: 'red' }}>{errors.username}</p>
          )}
        </label>
        <br />
        <label className='inputLabels' htmlFor='psw'>
          <b>Password</b>
          <Field
            className='inputFields'
            component='input'
            type='password'
            name='password'
            placeholder='Password'
          />
          {touched.password && errors.password && (
            <p style={{ margin: '0', color: 'red' }}>{errors.password}</p>
          )}
        </label>
        <br />

        <div className='buttons'>
          <button type=''>Cancel</button>
          <button type='submit'>Sign Up</button>
        </div>
      </Form>

      <section className='alreadyMember'>
        <b>Already signed up?</b>{' '}
        <button>
          <Link to='/signin'>Login</Link>
        </button>{' '}
      </section>

      {user.map(users => (
        <p key={users.id}>{users.username} You have successfully signed up.</p>
      ))}
    </div>
  );
};

const SignUp = withFormik({
  mapPropsToValues({ username, password, type }) {
    return {
      username: username || '',
      password: password || '',
      type: type || 'creator'
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('User Name is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    tos: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    type: Yup.string()
  }),

  handleSubmit(values, { setStatus, resetForm, props }) {
    console.log('Form submitted', values);
    Axios.post('http://bw-how-to.herokuapp.com/register', values)
      .then(res => {
        console.log(res.data);
        setStatus(res.data);
        localStorage.setItem('token', res.data.token);
        props.history.push('/homepage');
        resetForm();
      })
      .catch(err => console.error('Error', err.message));
  }
})(UserForm);

export default SignUp;
