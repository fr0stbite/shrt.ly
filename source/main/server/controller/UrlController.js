import database from '../database/database';
import isUrl from '../utility/isUrl';
import InvalidUrlError from '../../common/utility/InvalidUrlError';

const UrlController = async (request, response) => {
  if (!request.body.url || !isUrl(request.body.url)) {
    throw new InvalidUrlError();
  }

  const { url } = request.body;
  const { id } = await database.model.Url.create({ location: url });

  response.json({ id });
};

export default UrlController;
