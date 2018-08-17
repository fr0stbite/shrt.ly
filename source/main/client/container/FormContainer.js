import { connect } from 'react-redux';

import ShortenAction from '../action/ShortenAction';
import FormComponent from '../component/FormComponent';

const FormContainer = connect(
  state => state,
  dispatch => ({
    submit: url => dispatch(ShortenAction(url))
  })
)(FormComponent);

export default FormContainer;
