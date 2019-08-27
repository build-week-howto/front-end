import React from 'react';
import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';

import './createguide.scss';

const CreateGuide = () => {
  return (
    <div>
      <Form>
        <Field
          component='input'
          type='text'
          name='title'
          placeholder='Guide Name'
        />
        <Field
          component='input'
          type='text'
          name='keywords'
          placeholder='Keywords'
        />
        <Field
          component='input'
          type='text'
          name='supplies'
          placeholder='supplies'
        />
        <Field
          component='input'
          type='textarea'
          name='steps'
          placeholder='steps'
          row='2'
        />
        <button type='submit'>Submit</button>
      </Form>
    </div>
  );
};

const GuideEntry = withFormik({
  mapPropsToValues({ title, keywords, supplies, steps }) {
    return {
      title: title || '',
      keywords: keywords || '',
      supplies: supplies || '',
      steps: steps || ''
    };
  }
})(CreateGuide);

export default GuideEntry;
