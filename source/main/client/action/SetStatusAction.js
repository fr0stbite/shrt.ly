import ActionType from './ActionType';

const SetStatusAction = status => ({
  type: ActionType.SET_STATUS_ACTION,
  status
});

export default SetStatusAction;
