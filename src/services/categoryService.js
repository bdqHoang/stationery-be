const iCategoryService = require("./interface/iCategoryService");
const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const models = initModels(sequelize);

module.exports = class CategoryService extends iCategoryService {
	constructor() {
		super();
	}

	async getAll() {
		try {
			var data = await models.category.findAll({
				attributes: ["category_id", "name", "image"],
			});
			return data;
		} catch (error) {
			console.log(error);
		}
	}
};
