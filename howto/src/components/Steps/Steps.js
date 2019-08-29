import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import './steps.scss';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const Steps = props => {
  return (
    <div className='steps-container'>
      <h1 className='title'>Create A New Post</h1>
      <Formik
        initialValues={{ step_1: ['', '', ''] }}
        onSubmit={values =>
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
          }, 500)
        }
        render={({ values }) => (
          <Form className='form-container'>
            <Field
              component='input'
              type='text'
              name='title'
              placeholder='Guide Name'
            />

            <Field
              component='input'
              type='text'
              name='description'
              placeholder='Keywords'
            />
            <Field
              component='input'
              type='text'
              name='type'
              placeholder='type'
            />
            <FieldArray
              type='textarea'
              name='step_1'
              render={arrayHelpers => (
                <div>
                  {values.step_1 && values.step_1.length > 0 ? (
                    values.step_1.map((step_1, index) => (
                      <div key={index}>
                        <Field
                          component='textarea'
                          placeholder={`Steps ${index + 1}`}
                          name={`step_1.${index}`}
                        />
                        <br />
                        <button
                          type='button'
                          onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                        >
                          Remove Step
                        </button>
                        <button
                          type='button'
                          onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                        >
                          Add Step
                        </button>
                      </div>
                    ))
                  ) : (
                    <button type='button' onClick={() => arrayHelpers.push('')}>
                      {/* show this when user has removed all step_1 from the list */}
                      Add Steps
                    </button>
                  )}
                  <div>
                    <button type='submit'>Submit</button>
                  </div>
                </div>
              )}
            />
          </Form>
        )}
      />
    </div>
  );
};

export default Steps;
