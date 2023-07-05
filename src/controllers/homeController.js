const HomeService = require("../services/homeService");
const homeService = new HomeService();
class HomeController {
    constructor() {
    }

    getAll() {
        return homeService.getAll();
    }
}

exports = module.exports = new HomeController();