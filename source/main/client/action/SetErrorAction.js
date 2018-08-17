import ActionType from './ActionType';

const SetErrorAction = error => ({
  type: ActionType.SET_ERROR_ACTION,
  error
});

export default SetErrorAction;
