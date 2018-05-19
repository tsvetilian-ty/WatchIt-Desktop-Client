import { createHash } from 'crypto';

const CreateHash = toHash => createHash('md5').update(toHash).digest('hex');

export default CreateHash;
