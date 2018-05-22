import fs from 'fs';

const pathResolver = pathToResolve => new Promise((resolve, reject) => {
  fs.readdir(pathToResolve, (err, files) => {
    if (err) reject(err);
    resolve(files);
  });
});

export default pathResolver;
