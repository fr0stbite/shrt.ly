import url from 'url';

const isUrl = value => url.parse(value).hostname;

export default isUrl;
