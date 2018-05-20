import DB from 'electron-store';
import ip from 'ip';
import os from 'os';

const dbLoader = new Promise((resolve) => {
  const db = new DB();
  const serverAddress = db.get('serverAddress', null);
  const serverPort = db.get('serverPort', 8000);
  const authToken = db.get('authToken', null);
  const omdbApi = db.get('omdbapi', '2bd8bacc');
  const currentUser = db.get('currentUser', null);
  const localIP = ip.address();
  const deviceName = os.hostname();

  resolve({ serverAddress, serverPort, authToken, omdbApi, currentUser, localIP, deviceName });
});

export default dbLoader;
