import express from 'express';
import bodyParser from 'body-parser';

const server = express();

const Server = () => {
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(bodyParser.json());
  server.get('/health', (req, res) => res.status(200).json({}));

  server.listen(3090, () => console.log('Loal server is ready...'));
};

export default Server;
