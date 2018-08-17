import React from 'react';
import PropTypes from 'prop-types';

import forwardFormValues from '../utility/forwardFormValues';

const FormComponent = ({ submit }) => (
  <form onSubmit={forwardFormValues(submit, '#url-input')}>
    <input id="url-input" type="text" name="url" placeholder="Enter your URL" />
    <button type="submit">Shorten!</button>
  </form>
);

FormComponent.propTypes = {
  submit: PropTypes.func.isRequired
};

export default FormComponent;
