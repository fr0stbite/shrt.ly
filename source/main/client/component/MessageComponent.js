import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import Status from '../status/Status';
import UnknownStatusError from '../status/UnknownStatusError';

const MessageComponent = ({ location, status, id, error }) => {
  switch (status) {
    case Status.ERROR: {
      return (
        <div>
          <FontAwesomeIcon icon="exclamation" />
          <p className="error">
            {`${error.message}`}
          </p>
        </div>
      );
    }

    case Status.READY: {
      return (
        <div>
          <FontAwesomeIcon icon="info" />
          <p className="info">
            {'The service is healthy.'}
          </p>
        </div>
      );
    }

    case Status.SHORTENING: {
      return (
        <div>
          <FontAwesomeIcon icon="spinner" />
          <p className="info">
            {'Shortening.'}
          </p>
        </div>
      );
    }

    case Status.SUCCESS: {
      return (
        <div>
          <FontAwesomeIcon icon="check" />
          <p className="success">
            {'Your URL has been shortened to: '}
            <a href={`${location}/${id}`}>{`${id}`}</a>
          </p>
        </div>
      );
    }

    default: {
      throw new UnknownStatusError();
    }
  }
};

export default MessageComponent;
