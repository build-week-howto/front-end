import React, { useState } from 'react';
import Steps from '../Steps/Steps';
import { Form, Field, withFormik } from 'formik';
// import * as Yup from 'yup';

import './createguide.scss';

const CreateGuide = props => {
  console.log(props);
  return (
    <div>
      <Steps />
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
