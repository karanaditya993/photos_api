const express = require("express");
const axios = require("axios");
const app = express();

const API_URL = "https://jsonplaceholder.typicode.com/photos";

// const PORT = 3000 || process.env.port
// same thing as below
const { PORT = 3000 } = process.env;

const reverseString = (s) => {
	return s.split("").reverse().join("");
};

app.get("/", (req, res) => {
	const normalString = req.query?.q;
	const reversedString = reverseString(normalString);
	res.send(reversedString);
});

app.get("/photos", async (_, res) => {
	try {
		const { data } = await axios.get(API_URL);
		res.send(data);
	} catch (err) {
		throw new Error("Something went wrong", err);
	}
});

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}`);
});

module.exports = {
	reverseString,
};
