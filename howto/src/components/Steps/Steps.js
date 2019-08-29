import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';

import './steps.scss';

// Here is an example of a form with an editable list.
// Next to each input are buttons for insert and remove.
// If the list is empty, there is a button to add an item.
const Steps = props => (
  <div className='steps-container'>
    <h1 className='title'>Create A New Post</h1>
    <Formik
      initialValues={{ steps: ['', '', ''] }}
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
            name='keywords'
            placeholder='Keywords'
          />
          <Field
            component='input'
            type='text'
            name='supplies'
            placeholder='supplies'
          />
          <FieldArray
            type='textarea'
            name='steps'
            render={arrayHelpers => (
              <div>
                {values.steps && values.steps.length > 0 ? (
                  values.steps.map((steps, index) => (
                    <div key={index}>
                      <Field
                        component='textarea'
                        placeholder={`Steps ${index + 1}`}
                        name={`steps.${index}`}
                      />
                      <button
                        type='button'
                        onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                      >
                        Remove Steps
                      </button>
                      <button
                        type='button'
                        onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                      >
                        Add Steps
                      </button>
                    </div>
                  ))
                ) : (
                  <button type='button' onClick={() => arrayHelpers.push('')}>
                    {/* show this when user has removed all steps from the list */}
                    Add a friend
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

export default Steps;
