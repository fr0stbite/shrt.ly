import nanoid from 'nanoid/generate';

const CHARACTER_SET = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ_-';
const LENGTH = 7;

const generateId = () => nanoid(CHARACTER_SET, LENGTH);

export default generateId;
