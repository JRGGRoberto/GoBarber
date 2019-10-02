const server = 'localhost';
const port = '27017';
const db = 'gobarber';

export default {
  strConnectMongo: `mongodb://${server}:${port}/${db}`,
};
