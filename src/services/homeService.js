const iHomeService = require("./interface/iHomeService");
const Product = require("../models/product")
const Category = require("../models/category")
const product = new Product();
const category = new Category();

module.exports = class HomeService extends iHomeService {
    constructor() {
        super();
    }

    getAll() {
        return product.findAll({
            include: [{
                model: category,
                attributes: ['name'],
                required: true
            }],
        });
    }
}