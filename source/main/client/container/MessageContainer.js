import { connect } from 'react-redux';

import MessageComponent from '../component/MessageComponent';

const MessageContainer = connect(
  state => state,
  dispatch => ({ dispatch })
)(MessageComponent);

export default MessageContainer;
