import ActionType from './ActionType';

const ShortenAction = url => ({
  type: ActionType.SHORTEN_ACTION,
  url
});

export default ShortenAction;
