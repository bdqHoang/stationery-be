const HomeService = require("../services/homeService");
const homeService = new HomeService();
class HomeController {
    constructor() {
    }

    async getAll() {
        return await homeService.getAll();
    }

    //get featured product by id category
    async getFeaturedProduct(id) {
        return await homeService.getFeaturedProduct(id);
    }
        
}

exports = module.exports = new HomeController();