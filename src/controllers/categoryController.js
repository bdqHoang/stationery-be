const CategoryService = require("../services/categoryService");
const categoryService = new CategoryService();
class CategoryController {
	constructor() {}

	async getAll() {
		return await categoryService.getAll();
	}
}

exports = module.exports = new CategoryController();
