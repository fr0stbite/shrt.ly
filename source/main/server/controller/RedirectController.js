import Sequelize from 'sequelize';

import database from '../database/database';
import UnknownUrlError from '../../common/utility/UnknownUrlError';

const RedirectController = async (request, response) => {
  if (!request.params.id) {
    return;
  }

  const { id } = request.params;

  const url = await database.model.Url.findOne({
    where: {
      id: {
        [Sequelize.Op.eq]: id
      }
    }
  });

  if (!url) {
    throw new UnknownUrlError();
  }

  response.redirect(url.location);
};

export default RedirectController;
