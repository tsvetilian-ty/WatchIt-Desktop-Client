import jwt from 'jsonwebtoken';
import store from './mainProcessStore';

const authValidation = (req, res, next) => {
  const signingKey = store.getState().settings.signingKey;
  const token = req.headers.authorization;

  if (!token) { res.status(401).json({ error: { message: 'Unable to authorize!' } }); }

  const authToken = token.split(' ')[1];

  jwt.verify(authToken, signingKey, (err, decoded) => {
    if (err) { res.status(401).json({ error: { message: 'Unable to authorize!' } }); }
    if (!decoded) { res.status(401).json({ error: { message: 'Unable to authorize!' } }); }
    next();
  });
};

export default authValidation;
