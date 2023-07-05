const jwt = require('jsonwebtoken');
const  secretKey  = process.env.secretKey

function authenticate(req, res, next) {
  // Xử lý xác thực token
}

module.exports = authenticate;
