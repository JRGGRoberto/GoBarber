import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor() {
    this.init();

    models.map(model => model.init(this.connection));
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
  }
}

export default new Database();
