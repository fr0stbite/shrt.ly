import ActionType from '../action/ActionType';

const ApplicationReducer = (state, action) => {
  switch (action.type) {
    case ActionType.SET_ERROR_ACTION: {
      return { ...state, error: action.error };
    }

    case ActionType.SET_ID_ACTION: {
      return { ...state, id: action.id };
    }

    case ActionType.SET_STATUS_ACTION: {
      return { ...state, status: action.status };
    }

    default: {
      return state;
    }
  }
};

export default ApplicationReducer;
