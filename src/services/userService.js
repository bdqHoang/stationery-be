const iUserService = require("./interface/iUserService");
const model = require("../models/init-models");
const sequelize = require("../config/database");
const models = model(sequelize);

module.exports = class UserService extends iUserService {
	constructor() {
		super();
	}

	async getAll() {
		var data = await models.users.findAll();

		return data;
	}
};
