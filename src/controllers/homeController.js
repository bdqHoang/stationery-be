const HomeService = require("../services/homeService");
const homeService = new HomeService();
class HomeController {
    constructor() {
    }

    async getAll() {
        return await homeService.getAll();
    }
}

exports = module.exports = new HomeController();