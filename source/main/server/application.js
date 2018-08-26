import express from 'express';

import ErrorController from './controller/ErrorController';
import RedirectController from './controller/RedirectController';
import UrlController from './controller/UrlController';
import database from './database/database';
import asynclyfy from './utility/asynclyfy';

const port = process.env.PORT;
const application = express();

(async () => {
  await database.sequelize.sync();

  application.use(express.json());
  application.use(express.static('build/static'));
  application.get('/:id', asynclyfy(RedirectController));
  application.post('/', asynclyfy(UrlController));
  application.use(ErrorController);

  application.listen(port, () => console.log(`Application is running at port ${port}.`));
})();
