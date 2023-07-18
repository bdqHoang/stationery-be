const express = require("express");
const app = express();

//get controller from controllers folder
const categoryController = require("../controllers/categoryController");

app.get("/", async (req, res) => {
	try {
		const data = await categoryController.getAll();
		res.json(data);
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = app;
