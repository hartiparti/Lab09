const express = require("express");
const router = express.Router();
const greeting =  require("./greeting");

	router.get("/greeting/:name", (req, res) =>{
	 res.status(200).send(
			{greeting: greeting(req.params.name) });
	// send(greeting.greeting(req, res)).res.status(200);
	});

module.exports = router;
