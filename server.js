const express = require("express");
const fs = require("fs");
const cors = require("cors");
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(
	cors({
		origin: "*",
	})
);
app.use(bodyParser.json());
app.post(
	"/users",
	body("email").isEmail(),
	body("password").isLength({ min: 8 }),
	function (req, res) {
		const errors = validationResult(req);
		if (!errors.isEmpty()) {
			const error = JSON.stringify({ status: "400" });
			fs.writeFileSync("server-error.json", error);
			return res.json({ status: "400" });
		}
		res.json({
			status: "200",
		});
		const data = JSON.stringify(req.body);
		fs.writeFileSync("server-ok.json", data);
	}
);

app.listen(3000, () => console.log("Сервер запущен..."));
