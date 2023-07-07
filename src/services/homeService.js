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
            include: [{
                model: models.category,
                as: 'category',
                attributes: ['name'],
                required: true
            }],
        });
        return data;
    }
}