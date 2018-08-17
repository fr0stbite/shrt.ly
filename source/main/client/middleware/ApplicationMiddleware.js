import { post } from 'axios';

import ActionType from '../action/ActionType';
import SetErrorAction from '../action/SetErrorAction';
import SetIdAction from '../action/SetIdAction';
import SetStatusAction from '../action/SetStatusAction';
import Status from '../status/Status';
import createError from '../../common/utility/createError';

const ApplicationMiddleware = store => next => action => {
  switch (action.type) {
    case ActionType.SHORTEN_ACTION: {
      const { url } = action;

      store.dispatch(SetStatusAction(Status.SHORTENING));

      post('/', { url })
        .then(({ data: { id } }) => {
          store.dispatch(SetIdAction(id));
          store.dispatch(SetStatusAction(Status.SUCCESS));
        })
        .catch(({ response: { data: { error } } }) => {
          store.dispatch(SetErrorAction(createError(error)));
          store.dispatch(SetStatusAction(Status.ERROR));
        });

      break;
    }

    default: {
      break;
    }
  }

  return next(action);
};

export default ApplicationMiddleware;
