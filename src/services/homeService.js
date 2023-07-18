const iHomeService = require("./interface/iHomeService");
const initModels = require("../models/init-models");
const sequelize = require("../config/database");
const models = initModels(sequelize);

module.exports = class HomeService extends iHomeService {
	constructor() {
		super();
	}

	async getAll() {
		var data = await models.product.findAll({
			include: [
				{
					model: models.category,
					as: "category",
					attributes: ["name"],
					required: true,
				},
			],
		});
		return data;
	}

	async getFeaturedProduct(id) {
		var data = await models.product.findAll({
			where: {
				category_id: id,
			},
			include: [
				{
					model: models.category,
					as: "category",
					attributes: ["category_id", "name"],
					required: true,
				},
			],
			order: [["created_day", "DESC"]],
		});
		return data;
	}
};
