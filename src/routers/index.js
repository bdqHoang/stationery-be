const express = require("express");
const app = express();
//router
const userRouter = require("./userRouter");
const categoryRouter = require("./categoryRouter");
//get router from routers folder
app.use("/user", userRouter);
app.use("/category", categoryRouter);

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
