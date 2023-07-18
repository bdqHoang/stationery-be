const express = require("express");
const app = express();

//get controller from controllers folder
const userController = require("../controllers/userController");

app.get("/information", async (req, res) => {
	try {
		const data = await userController.getAll();
		res.json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = app;
