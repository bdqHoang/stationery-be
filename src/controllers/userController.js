const UserService = require("../services/userService");
const userService = new UserService();
class userController {
	constructor() {}

	async getAll() {
		return await userService.getAll();
	}
}

exports = module.exports = new userController();
