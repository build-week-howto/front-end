import React, { useState, useEffect } from 'react';
import { Form, Field, withFormik } from 'formik';
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
    <div className='user-form'>
      <h1>Sign up Form</h1>
      <Form>
        <Field
          component='input'
          type='text'
          name='FirstName'
          placeholder='First Name'
        />
        {touched.FirstName && errors.FirstName && <p>{errors.FirstName}</p>}
        <Field
          component='input'
          type='text'
          name='LastName'
          placeholder='Last Name'
        />
        {touched.LastName && errors.LastName && <p>{errors.LastName}</p>}
        <Field component='select' name='roles'>
          <option>Choose a Role</option>
          <option value='role1'>Role 1</option>
          <option value='role2'>Role 2</option>
          <option value='role3'>Role 3</option>
        </Field>
        {touched.roles && errors.roles && <p>{errors.roles}</p>}
        <Field
          component='input'
          type='email'
          name='email'
          placeholder='Email'
        />
        {touched.email && errors.email && <p>{errors.email}</p>}
        <Field
          component='input'
          type='password'
          name='password'
          placeholder='Password'
        />
        {touched.password && errors.password && <p>{errors.password}</p>}
        <label htmlFor=''>
          Terms of Service
          <Field
            component='input'
            type='checkbox'
            name='tos'
            placeholder='TOS'
            checked={values.tos}
          />
          {touched.tos && errors.tos && <p>{errors.tos}</p>}
          <span className='checkmark' />
        </label>
        <button type='submit'>Sign Up</button>
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

const SignUp = withFormik({
  mapPropsToValues({ FirstName, LastName, email, password, tos, roles }) {
    return {
      FirstName: FirstName || '',
      LastName: LastName || '',
      roles: roles || '',
      email: email || '',
      password: password || '',
      tos: tos || false
    };
  },

  validationSchema: Yup.object().shape({
    FirstName: Yup.string().required('First Name is required'),
    LastName: Yup.string().required('Last Name is required'),
    email: Yup.string()
      .email()
      .required('Password is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    tos: Yup.boolean().oneOf([true], 'Must Accept Terms and Conditions'),
    roles: Yup.string().required('Select an Option')
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    // console.log('Form submited', values);
    Axios.post('https://reqres.in/api/users', values)
      .then(res => {
        console.log(res);
        setStatus(res.data);
        resetForm();
      })
      .catch(err => console.error('Error', err.response));
  }
})(UserForm);

export default SignUp;
