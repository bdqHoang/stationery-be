const express = require("express");
const app = express();

//get controller from controllers folder
const homeController = require("../controllers/homeController");

app.get("/", async (req, res) => {
	try {
		const data = await homeController.getAll();
		res.json(data);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = app;
