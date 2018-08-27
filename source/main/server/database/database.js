import Sequelize from 'sequelize';

import Url from '../model/Url';

const url = process.env.DATABASE_URL;
const modules = { Url };
const sequelize = new Sequelize(url, { logging: false });
const model = Object.assign(
  {},
  ...Object.keys(modules)
    .map(key => ({ key, value: modules[key] }))
    .map(({ key, value }) => ({ [key]: value(sequelize) }))
);

const database = { model, sequelize };

export default database;
