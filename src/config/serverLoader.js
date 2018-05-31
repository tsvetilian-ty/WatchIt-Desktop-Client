import express from 'express';
import bodyParser from 'body-parser';
import { PATH_TO_WATCHIT } from './directoryStructure';
import authValidator from './helpers/authValidator';

const server = express();

const Server = () => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.use(authValidator);
  server.get('/health', (req, res) => res.status(200).json({}));
  server.use('/watch', express.static(PATH_TO_WATCHIT));

  server.listen(3090, () => console.log('Loal server is ready...'));
};

export default Server;
