import Sequelize from 'sequelize';

import generateId from '../utility/generateId';

const Url = sequelize => sequelize.define('url', {
  uuid: {
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
    primaryKey: true
  },
  id: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: generateId,
    unique: true
  },
  location: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

export default Url;
