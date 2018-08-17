import Sequelize from 'sequelize';

import Url from '../model/Url';

const modules = { Url };
const sequelize = new Sequelize('sqlite:build/database.db', { logging: false });
const model = Object.assign(
  {},
  ...Object.keys(modules)
    .map(key => ({ key, value: modules[key] }))
    .map(({ key, value }) => ({ [key]: value(sequelize) }))
);

const database = { model, sequelize };

export default database;
